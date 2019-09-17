import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import NavBar from '../components/NavBar'

const ProfileEditor = props => {
    return (
        <View style={styles.viewPort}>
            <NavBar />
            <View style={styles.profileEditorScreen}>
                <Text>Profile Editor</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    viewPort: {
        flex: 1,
        height: '100%',
    },
    profileEditorScreen: {
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ProfileEditor;