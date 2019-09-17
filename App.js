// Import the screens
// import GetStarted from './screens/GetStarted';
import Login from './screens/GetStarted';
import SignUp from './screens/SignUp'
import Profile from './screens/Profile';
import ProfileEditor from './screens/ProfileEditor';
import Chat from './screens/Chat';
// Import React Navigation
import { createStackNavigator } from 'react-navigation'

// Create the navigator
const navigator = createStackNavigator({
  // GetStarted: { screen: GetStarted },
  Login: { screen: Login },
  SignUp: { screen: SignUp },
  Profile: { screen: Profile },
  ProfileEditor: { screen: ProfileEditor },
  Chat: { screen: Chat },
});

// Export it as the root component
export default navigator