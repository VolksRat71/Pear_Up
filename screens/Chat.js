import React from 'react';
import { YellowBox, Text, Platform, View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { Avatar } from 'react-native-paper';
import KeyboardSpacer from "react-native-keyboard-spacer";

import _ from 'lodash';
import firebase from 'firebase';
import FirebaseSDK from '../config/FirebaseSDK';


YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
    if (message.indexOf('Setting a timer') <= -1) {
        _console.warn(message);
    }
};

class Chat extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        messages: [],
        name: firebase.auth().currentUser.displayName,
        email: firebase.auth().currentUser.email,
        avatar: firebase.auth().currentUser.photoURL
    };

    get user() {
        return {
            name: this.state.name,
            email: this.state.email,
            avatar: this.state.avatar,
            id: FirebaseSDK.uid,
            _id: FirebaseSDK.uid, // need for gifted-chat
        };
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <GiftedChat
                    messages={this.state.messages}
                    onSend={FirebaseSDK.send}
                    user={{
                        _id: this.user._id,
                        name: this.user.name,
                        avatar: this.user.avatar
                    }}
                    showUserAvatar={true}
                />
                {Platform.OS === 'android' ? <KeyboardSpacer /> : null}
                {Platform.OS === 'android' ? <View style={{ paddingBottom: 50 }}></View> : null}
            </View>
        );
    }

    componentDidMount() {
        FirebaseSDK.refOn(message =>
            this.setState(previousState => ({
                messages: GiftedChat.append(previousState.messages, message),
            }))
        );
    }
    componentWillUnmount() {
        FirebaseSDK.refOff();
    }
}

Chat.navigationOptions = navData => {
    categoryName = navData.navigation.getParam('categoryTitle', 'chat?')

    return {
        headerTitle: categoryName + ' Chatroom'
    }
}

export default Chat;