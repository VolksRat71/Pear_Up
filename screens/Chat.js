import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import NavBar from '../components/NavBar'

const Chat = props => {
    return (
        <View style={styles.viewPort}>
            <NavBar />
            <View style={styles.chatScreen}>
                <Text>Chat</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    viewPort: {
        flex: 1,
        height: '100%',
    },
    chatScreen: {
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Chat;