import React from 'react';
import firebase from 'firebase';
import { View, StyleSheet, Text, Button } from 'react-native';
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from '../components/HeaderButton';

const Profile = props => {


    return (
        <View style={styles.viewPort}>
            <View style={styles.profileScreen}>
                <Text>Profile</Text>
                <Button
                    title='User'
                    onPress={() => console.log(user)}
                />
                <Button
                    title='Edit Profile'
                    onPress={() => {
                        props.navigation.navigate('ContentEditor')
                    }}
                />
            </View>
        </View>
    )
}

Profile.navigationOptions = (navData) => {
    const user = firebase.auth().currentUser

    return {
        headerTitle: user.displayName,
        headerRight: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title='Menu' iconName='ios-menu' onPress={() => {
                    navData.navigation.toggleDrawer();
                }} />
            </HeaderButtons>
        )
    }
}

const styles = StyleSheet.create({
    viewPort: {
        flex: 1,
        height: '100%',
    },
    profileScreen: {
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Profile;