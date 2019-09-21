import React from 'react';
import { YellowBox } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
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

// this.Props = {
//     name?: string,
//     email?: string,
//     avatar?: string,
// };

class Chat extends React.Component {

    constructor(props) {
        super(props);
    }
    // static navigationOptions = ({ navigation }) => ({
    //     title: (navigation.state.params || {}).name || 'Chat!',
    // });

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
            <GiftedChat
                messages={this.state.messages}
                onSend={FirebaseSDK.send}
                user={this.user}
            />
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