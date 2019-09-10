import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
    ImageBackground
} from 'react-native';
import Card from '../components/Card';

const Login = props => {
    return (
        <ImageBackground
            source={require('../assets/login_background.gif')}
            style={styles.backGround}>
            <View style={styles.viewPort}>
                <Card style={styles.loginCard}>
                    <Text>Login</Text>
                    {/* <Image
                        source={require('../assets/placeholder_logo.jpg')}
                        style={styles.logo}
                    /> */}
                </Card>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    backGround: {
        height: '100%'
    },
    viewPort: {
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginCard: {
        opacity: .7,
        height: 300,
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        flex: 1,
        width: '50%',
    }
});

export default Login;