import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat'; // 0.3.0

import FirebaseSDK from '../config/FirebaseSDK';

type Props = {
    name?: string,
    email?: string,
    avatar?: string,
};

class Chat extends React.Component<Props> {

    constructor(props) {
        super(props);
    }
    // static navigationOptions = ({ navigation }) => ({
    //     title: (navigation.state.params || {}).name || 'Chat!',
    // });

    state = {
        messages: [],
    };

    get user() {
        return {
            name: this.props.navigation.state.params.name,
            email: this.props.navigation.state.params.email,
            avatar: this.props.navigation.state.params.avatar,
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