import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';

import GetStarted from '../screens/GetStarted';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp'
import Profile from '../screens/Profile';
import ProfileEditor from '../screens/ProfileEditor';
import Chat from '../screens/Chat';

const GetStartedNavigator = createDrawerNavigator({
    GetStarted: GetStarted,
    Login: Login,
    SignUp: SignUp
});

const LoginToSignNavigator = createStackNavigator({
    Login: Login,
    SignUp: SignUp
});

const LoginToProfileNavigator = createStackNavigator({
    Login: Login,
    Profile: Profile
})

const AppNavigator = createStackNavigator({
    GetStartedNavigator: GetStartedNavigator,
    LoginToSignNavigator: LoginToSignNavigator,
    LoginToProfileNavigator: LoginToProfileNavigator
});

export default createAppContainer(AppNavigator);