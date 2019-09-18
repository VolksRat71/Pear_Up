import React from 'react'
import { Platform, Text } from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { Ionicons } from '@expo/vector-icons'

import Colors from '../constants/Colors'
import GetStarted from '../screens/GetStarted'
import Login from '../screens/Login'
import SignUp from '../screens/SignUp'
import ProfileScreen from '../screens/Profile'
import ProfileEditorScreen from '../screens/ProfileEditor'
import SportCategoriesScreen from '../screens/SportCategories'
import ChatScreen from '../screens/Chat'

const defaultStackNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTintColor:
        Platform.OS === 'android' ? 'white' : Colors.primaryColor,
    headerTitle: 'A Screen'
}

const GetStartedNavigator = createStackNavigator({
    GetStarted: {
        screen: GetStarted,
        header: 'none',
        navigationOptions: {
            header: null
        }
    },
    Login: Login,
    SignUp: SignUp
});

const ProfileNavigator = createStackNavigator({
    Profile: ProfileScreen,
    ProfileEditor: ProfileEditorScreen
}, {
    defaultNavigationOptions: defaultStackNavOptions
})

const ChatCategoriesNavigator = createStackNavigator({
    Categories: SportCategoriesScreen,
    ChatRoom: ChatScreen
}, {
    defaultNavigationOptions: defaultStackNavOptions
})

const MainNavigator = createDrawerNavigator({
    SportCategoreis: {
        screen: ChatCategoriesNavigator,
        navigationOptions: {
            drawerLabel: 'Sport Categories'
        }
    },
    ProfileView: {
        screen: ProfileNavigator,
        navigationOptions: {
            drawerLabel: 'Profile'
        }
    }
})

const LoginToProfileNavigator = createStackNavigator({
    LoginSet: GetStartedNavigator,
    ProfileScreen: MainNavigator
})

export default createAppContainer(LoginToProfileNavigator)