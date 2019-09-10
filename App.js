import React from 'react';
import { View, StyleSheet } from 'react-native';
import Login from './screens/Login';
import Profile from './screens/Profile';
import ProfileEditor from './screens/ProfileEditor';
import Match from './screens/Match';
import Chat from './screens/Chat';

export default function App() {
  return (
    <View style={styles.viewPort}>
      <Login />
      {/* <Profile /> */}
      {/* <ProfileEditor /> */}
      {/* <Match /> */}
      {/* <Chat /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  viewPort: {
    flex: 1,
  },
});
