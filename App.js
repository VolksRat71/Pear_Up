import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Swipe from "./components/Swipe";
import profile from "./components/mockDB/data";

export default class App extends React.Component {
  state = {
    likedProfile: 0,
    passedProfile: 0
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ color: "#424242", textAlign: 'center', marginTop: 25 }}>Yep: {this.state.likedProfile}</Text>
        <Text style={{ color: "#424242", textAlign: 'center' }}>Nope: {this.state.passedProfile}</Text>
        <Swipe profile={profile} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 15
  },
  statusStyle: {
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-around"
  }
});
