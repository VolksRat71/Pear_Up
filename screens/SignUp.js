import React from 'react';
import {
    StyleSheet, Text,
    TextInput, View,
    TouchableOpacity, Button, ActivityIndicator
} from 'react-native';
import FirebaseSDK from '../config/FirebaseSDK';

import Card from '../components/Card';
import Color from '../constants/Colors';
import Dimensions from '../constants/dimenions';

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
            <View style={styles.viewport}>
                <View>
                    <Card style={styles.sigupCard}>
                        <View style={styles.cardContent}>
                            <View style={styles.cardSpacer}>
                                <Text>
                                    <Text style={styles.title}>
                                        Email:{"  "}
                                    </Text>
                                    <Text style={styles.disclaim}>
                                        Email is for login purposes only
                                    </Text>
                                </Text>
                            </View>
                            <TextInput
                                style={styles.nameInput}
                                placeHolder="test3@gmail.com"
                                onChangeText={this.onChangeTextEmail}
                                value={this.state.email}
                            />
                            <View style={styles.cardSpacer}>
                                <Text>
                                    <Text style={styles.title}>
                                        Password:{"  "}
                                    </Text>
                                    <Text style={styles.disclaim}>
                                        Input must be 6 charactors minimum
                                </Text>
                                </Text>
                            </View>
                            <TextInput
                                secureTextEntry={true}
                                style={styles.nameInput}
                                onChangeText={this.onChangeTextPassword}
                                value={this.state.password}
                            />
                            <View style={styles.cardSpacer}>
                                <Text>
                                    <Text style={styles.title}>
                                        Name:{"  "}
                                    </Text>
                                    <Text style={styles.disclaim}>
                                        What everyone else will see
                                    </Text>
                                </Text>
                                <TextInput
                                    style={styles.nameInput}
                                    onChangeText={this.onChangeTextName}
                                    value={this.state.name}
                                />
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={this.onPressCreate}>
                                    <Text>
                                        Create Account
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

const styles = StyleSheet.create({
    viewport: {
        height: '100%',
        flex: 1,
        backgroundColor: Color.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    signupCard: {
        height: 300,
        width: 300,
        maxWidth: '80%',
    },
    cardContent: {
        marginTop: Dimensions.offset,
        marginLeft: Dimensions.offset,
        marginRight: Dimensions.offset,
    },
    cardSpacer: {
        paddingVertical: Dimensions.offset,
        marginTop: Dimensions.offset
    },
    title: {
        fontSize: Dimensions.offset,
        color: Color.primary,
    },
    disclaim: {
        color: Color.accent2,
        fontStyle: 'italic',
    },
    nameInput: {
        height: Dimensions.offset * 2,
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
    },
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CreateAccount;