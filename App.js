import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Swipe from "./components/Swipe";
import profile from "./components/data";

export default class App extends React.Component {
  state = {
    likedProfile: 0,
    passedProfile: 0
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ color: "blue" }}>Liked: {this.state.likedProfile}</Text>
        <Text style={{ color: "red" }}>Passed: {this.state.passedProfile}</Text>
        <Swipe profile={profile} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  statusStyle: {
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-around"
  }
});
