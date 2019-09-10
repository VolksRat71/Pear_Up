import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    Text,
    ImageBackground,
    TouchableOpacity,
} from 'react-native';
import Card from '../components/Card';
import LoginModal from '../components/LoginModal';

const Login = props => {

    const [isLogin, setIsLogin] = useState(false);

    const closeModal = () => {
        setIsLogin(false);
    }

    return (
        <ImageBackground
            source={require('../assets/login_background.gif')}
            style={styles.backGround}>
            <View style={styles.viewPort}>
                <Card style={styles.loginCard}>
                    <View style={styles.welcomeMessage}>
                        <Text style={{ fontSize: 25, color: '#008B8B' }}>Welcome to Emit</Text>
                    </View>
                    <View style={styles.getStarted}>
                        <TouchableOpacity
                            onPress={() => setIsLogin(true)}>
                            <Text style={{ fontSize: 20, color: '#f7287b' }}>Get Started</Text>
                        </TouchableOpacity>
                    </View>
                </Card>
                <LoginModal
                    visible={isLogin}
                    onClose={closeModal} />
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
        opacity: .8,
        height: '30%',
        width: 300,
        maxWidth: '80%',
        borderWidth: 1,
        borderColor: 'gray',
    },
    welcomeMessage: {
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        paddingBottom: 15,
        alignItems: 'center',
        // Font style stated with <Text>
    },
    getStarted: {
        alignItems: 'center',
        height: '100%',
        width: '100%',
        paddingTop: '22%'
        // Font style stated with <Text>
    }
});

export default Login;