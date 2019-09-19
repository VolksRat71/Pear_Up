import React from 'react'
import { Platform, Text } from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { Ionicons } from '@expo/vector-icons'
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from '../components/HeaderButton'
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

const ProfileNavigator = createStackNavigator({
    Profile: ProfileScreen,
    ProfileEditor: ProfileEditorScreen
}, {
    defaultNavigationOptions: defaultStackNavOptions
})

const ChatCategoriesNavigator = createStackNavigator({
    Categories: {
        screen: SportCategoriesScreen,
        navigationOptions: {
            headerTitle: 'contrast'
        }
    },
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

const GetStartedNavigator = createStackNavigator({
    GetStarted: {
        screen: GetStarted,
        header: 'none',
        navigationOptions: {
            header: null
        }
    },
    Login: Login,
    SignUp: SignUp,
    ContentView: {
        screen: MainNavigator,
        // navigationOptions: {
        //     headerRight: (
        //         <HeaderButtons HeaderButtonComponent={HeaderButton}>
        //             <Item title='Menu' iconName='ios-menu' onPress={() => {
        //                 navigation.toggleDrawer();
        //             }} />
        //         </HeaderButtons>
        //     )
        // }
    }
});

// const LoginToProfileNavigator = createStackNavigator({
//     LoginSet: {
//         screen: GetStartedNavigator,
//         header: 'none',
//         navigationOptions: {
//             header: null
//         }
//     },
//     ContentView: MainNavigator
// })

export default createAppContainer(GetStartedNavigator)