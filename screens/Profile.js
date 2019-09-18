import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Profile = props => {
    return (
        <View style={styles.viewPort}>
            <View style={styles.profileScreen}>
                <Text>Profile</Text>
                <Button
                    title='Edit Profile'
                    onPress={() => {
                        props.navigation.navigate('ProfileEditor')
                    }}
                />
            </View>
        </View>
    )
}

Profile.navigationOptions = (navData) => {
    return {
        headerTitle: 'Profile',
        headerLeft: (
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