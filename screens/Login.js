import React from 'react';
import {
    StyleSheet, Text,
    TextInput, View,
    Button, TouchableOpacity
} from 'react-native';
import FirebaseSDK from '../config/FirebaseSDK';

import Card from '../components/Card';
import Color from '../constants/Colors';
import Dimensions from '../constants/dimenions';

class Login extends React.Component {

    state = {
        name: '',
        email: '',
        password: '',
        avatar: '',
    };

    // using Fire.js
    onPressLogin = async () => {
        console.log('pressing login... email:' + this.state.email);
        const user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            avatar: this.state.avatar,
        };

        const response = FirebaseSDK.login(
            user,
            this.loginSuccess,
            this.loginFailed
        );
    };

    loginSuccess = () => {
        console.log('login successful');
        this.props.navigation.replace('ContentStart', {
            name: this.state.name,
            email: this.state.email,
            avatar: this.state.avatar,
        });
    };
    loginFailed = () => {
        console.warn('login failed ***');
        alert('Login failure. Please tried again.');
    };


    onChangeTextEmail = email => this.setState({ email });
    onChangeTextPassword = password => this.setState({ password });


    render() {
        return (
            <View style={styles.viewport}>
                <View style={styles.loginContainer}>
                    <Card style={styles.loginCard}>
                        <View>
                            <Text style={styles.title}>Email:</Text>
                            <TextInput
                                style={styles.nameInput}
                                placeHolder="test3@gmail.com"
                                onChangeText={this.onChangeTextEmail}
                                value={this.state.email}
                            />
                            <Text style={styles.title}>Password:</Text>
                            <TextInput
                                secureTextEntry={true}
                                style={styles.nameInput}
                                onChangeText={this.onChangeTextPassword}
                                value={this.state.password}
                            />
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={this.onPressLogin}>
                                    <Text>
                                        Login
                            </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={() => this.props.navigation.navigate("SignUp")}>
                                    <Text>
                                        Signup
                            </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Card>
                </View>
            </View>
        );
    }
}

Login.navigationOptions = {
    headerMode: 'none',
    headerVisible: false
}

const styles = StyleSheet.create({
    viewport: {
        height: '100%',
        flex: 1,
        backgroundColor: Color.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginCard: {
        height: 300,
        width: 300,
        maxWidth: '80%',
    },
    loginContainer: {
        paddingTop: 60,
    },
    title: {
        marginTop: Dimensions.offset,
        marginLeft: Dimensions.offset,
        fontSize: Dimensions.offset,
        color: Color.primary,
    },
    nameInput: {
        height: Dimensions.offset * 2,
        margin: Dimensions.offset,
        paddingHorizontal: Dimensions.offset / 2,
        borderColor: Color.accent2,
        borderBottomWidth: 1,
        fontSize: Dimensions.offset,
    },
    buttonContainer: {
        marginVertical: Dimensions.offset,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        color: Color.primary
    }
});

export default Login;