
import React, { useState } from 'react';
import firebase from 'firebase';
import { View, StyleSheet, Text, Button, Platform, TouchableOpacity } from 'react-native';
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { Avatar } from 'react-native-paper';

import HeaderButton from '../components/HeaderButton';
import Color from '../constants/Colors';

const Profile = props => {
    const [profileImage, setProfileImage] = useState(firebase.auth().currentUser.photoURL)

    const user = firebase.auth().currentUser

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
                    <Text style={styles.username}>{user.displayName}</Text>
                    <Text style={styles.email}>{user.email}</Text>
                    <View style={styles.editButton}>
                        <TouchableOpacity
                            onPress={() => {
                                props.navigation.navigate('ContentEditor')

                            }}>
                            <Text style={{ color: "#0000FF" }}>
                                Edit Profile
                            </Text>
                        </TouchableOpacity>
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
    return {
        headerTitle: 'Profile',
        headerRight: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title='Menu' iconName='ios-menu' onPress={() => {
                    navData.navigation.toggleDrawer();
                }} />
            </HeaderButtons>
        ),
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Color.secondary : Color.primary
        },
        headerTintColor: Platform.OS === 'android' ? Color.primary : Color.secondary,    
    }
}

const styles = StyleSheet.create({
    viewPort: {
        flex: 1,
        height: '100%',
        backgroundColor: Color.primary,
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
        color: Color.accent1,
        fontWeight: 'bold',
        fontSize: 20,
    },
    email: {
        color: Color.accent2,
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