import React from 'react'
import {
    Platform,
    Text
} from 'react-native'
import {
    createAppContainer
} from 'react-navigation';
import {
    createStackNavigator
} from 'react-navigation-stack'
import {
    createBottomTabNavigator
} from 'react-navigation-tabs'
import {
    createDrawerNavigator
} from 'react-navigation-drawer'
import {
    Ionicons
} from '@expo/vector-icons'
import {
    HeaderButtons,
    Item
} from "react-navigation-header-buttons";

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
        backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'purple' : Colors.primary,
    headerTitle: 'A Screen',
}

const CategoriesNavigator = createStackNavigator({
    CatList: SportCategoriesScreen
})

const ProfileNavigator = createStackNavigator({
    Prof: ProfileScreen
})

const ContentDrawer = createDrawerNavigator({
    Categories: {
        screen: CategoriesNavigator,
        navigationOptions: {
            drawerLabel: 'Chatrooms'
        }
    },
    Profile: {
        screen: ProfileNavigator,
        navigationOptions: {
            drawerLabel: 'Profile'
        }
    }
})

const MainNavigator = createStackNavigator({
    GetStarted: {
        screen: GetStarted,
        navigationOptions: {
            header: null,
        }
    },
    Login: {
        screen: Login,
        navigationOptions: {
            header: null
        }
    },
    SignUp: {
        screen: SignUp,
        navigationOptions: {
            headerTitle: 'Welcome to Emit'
        }
    },
    ContentStart: {
        screen: ContentDrawer,
        navigationOptions: {
            header: null
        }
    },
    ChatRoom: {
        screen: ChatScreen
    },
    ContentEditor: {
        screen: ProfileEditorScreen
    }
})

// const ProfileNavigator = createStackNavigator({
//     Profile: ProfileScreen,
//     ProfileEditor: ProfileEditorScreen
// }, {
//     defaultNavigationOptions: defaultStackNavOptions
// })

// const ChatCategoriesNavigator = createStackNavigator({
//     Categories: {
//         screen: SportCategoriesScreen,
//         navigationOptions: {
//             headerTitle: 'contrast'
//         }
//     },
//     ChatRoom: ChatScreen
// }, {
//     defaultNavigationOptions: defaultStackNavOptions
// })

// const MainNavigator = createDrawerNavigator({
//     SportCategoreis: {
//         screen: ChatCategoriesNavigator,
//         navigationOptions: {
//             drawerLabel: 'Sport Categories'
//         }
//     },
//     ProfileView: {
//         screen: ProfileNavigator,
//         navigationOptions: {
//             drawerLabel: 'Profile'
//         }
//     }
// })

// const GetStartedNavigator = createStackNavigator({
//     GetStarted: {
//         screen: GetStarted,
//         header: 'none',
//         navigationOptions: {
//             header: null
//         }
//     },
//     Login: Login,
//     SignUp: SignUp,
//     ContentView: {
//         screen: MainNavigator,
//         // navigationOptions: {
//         //     headerRight: (
//         //         <HeaderButtons HeaderButtonComponent={HeaderButton}>
//         //             <Item title='Menu' iconName='ios-menu' onPress={() => {
//         //                 navigation.toggleDrawer();
//         //             }} />
//         //         </HeaderButtons>
//         //     )
//         // }
//     }
// });

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

export default createAppContainer(MainNavigator)