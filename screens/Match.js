import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import NavBar from '../components/NavBar'

const Match = props => {
    return (
        <View style={styles.viewPort}>
            <NavBar />
            <View style={styles.matchScreen}>
                <Text>Match</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    viewPort: {
        flex: 1,
        height: '100%',
    },
    matchScreen: {
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Match;