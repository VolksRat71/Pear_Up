import React from 'react';
import { View, StyleSheet } from 'react-native';
import Chat from './screens/Chat';
import Match from './screens/Match';
import Profile from './screens/Profile';
import ProfileEditor from './screens/ProfileEditor';

export default function App() {
  return (
    <View style={styles.viewPort}>
      <Chat />
      {/* <Match /> */}
      {/* <Profile /> */}
      {/* <ProfileEditor /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  viewPort: {
    flex: 1,
  },
});
