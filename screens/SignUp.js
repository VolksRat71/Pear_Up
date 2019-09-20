import React from 'react';
import {
    StyleSheet, Text,
    TextInput, View,
    Button, ActivityIndicator
} from 'react-native';
import FirebaseSDK from '../config/FirebaseSDK';

import Colors from '../constants/Colors'

class CreateAccount extends React.Component {

    state = {
        name: '',
        email: '',
        password: '',
        avatar: '',
        isLoading: false
    };

    onPressCreate = async () => {
        console.log('create account... email:' + this.state.email);
        this.setState({ isLoading: true })
        try {
            const user = {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
                avatar: this.state.avatar,
            };
            await FirebaseSDK.createAccount(user);
        } catch ({ message }) {
            console.log('create account failed. catch error:' + message);
        }
        this.setState({ isLoading: false })
    };

    onChangeTextEmail = email => this.setState({ email });
    onChangeTextPassword = password => this.setState({ password });
    onChangeTextName = name => this.setState({ name });

    render() {
        if (this.state.isLoading) {
            return (
                <View style={styles.loading}>
                    <ActivityIndicator size='large' color={Colors.primary} />
                </View>
            )
        }
        return (
            <View>
                <Text style={styles.title}>Email: Email is for login purposes only</Text>
                <TextInput
                    style={styles.nameInput}
                    placeHolder="test3@gmail.com"
                    onChangeText={this.onChangeTextEmail}
                    value={this.state.email}
                />
                <Text style={styles.title}>Password: Input must me 6 charactors minimum</Text>
                <TextInput
                    secureTextEntry={true}
                    style={styles.nameInput}
                    onChangeText={this.onChangeTextPassword}
                    value={this.state.password}
                />
                <Text style={styles.title}>Name: What everyone else will see</Text>
                <TextInput
                    style={styles.nameInput}
                    onChangeText={this.onChangeTextName}
                    value={this.state.name}
                />
                <Button
                    title="Create Account"
                    style={styles.buttonText}
                    onPress={this.onPressCreate}
                />
            </View>
        );
    }
}

const offset = 16;
const styles = StyleSheet.create({
    title: {
        marginTop: offset,
        marginLeft: offset,
        fontSize: offset,
    },
    nameInput: {
        height: offset * 2,
        margin: offset,
        paddingHorizontal: offset,
        borderColor: '#111111',
        borderWidth: 1,
        fontSize: offset,
    },
    buttonText: {
        marginLeft: offset,
        fontSize: 42,
    },
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CreateAccount;