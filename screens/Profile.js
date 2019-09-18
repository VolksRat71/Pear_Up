import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Profile = props => {
    return (
        <View style={styles.viewPort}>
            <View style={styles.profileScreen}>
                <Text>Profile</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    viewPort: {
        flex: 1,
        height: '100%',
    },
    profileScreen: {
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Profile;