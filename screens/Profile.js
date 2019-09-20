import React, { useState } from 'react';
import firebase from 'firebase';
import { View, StyleSheet, Text, Button, Image } from 'react-native';
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { Avatar, TextInput } from 'react-native-paper';

import HeaderButton from '../components/HeaderButton';
import ProfilePic from '../assets/placeholder-profile.jpg'

const Profile = props => {
    const [profileImage, setProfileImage] = useState(firebase.auth().currentUser.photoURL)

    const imageHandler = () => {
        setProfileImage(firebase.auth().currentUser.photoURL)
    }

    return (
        <View style={styles.viewPort}>
            <View style={styles.profileScreen}>
                <View style={styles.avatar}>
                    <Avatar.Image size={300} source={{ uri: profileImage }} />
                </View>
                <View style={styles.profileData}>
                    <Text style={styles.username}>Username: insert</Text>
                    <Text style={styles.email}>Email: insert</Text>
                    <View style={styles.editButton}>
                        <Button
                            title='Edit Profile'
                            onPress={() => {
                                props.navigation.navigate('ContentEditor')
                            }}
                        />
                         <Button 
                            title='Reload Image'
                            onPress={imageHandler}
                        />
                    </View>
                </View>
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
    avatar: {
        paddingBottom: 15,
    },
    username: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    email: {
        fontSize: 15,
    },
    profileData: {
        alignItems: 'center',
    },
    editButton: {
        marginVertical: 15,
    }
});

export default Profile;