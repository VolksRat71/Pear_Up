import React from 'react';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import { Avatar } from 'react-native-paper';
import {
    StyleSheet, View,
    TouchableOpacity, ImageEditor,
    Text, TextInput, Image
} from 'react-native';
import firebase from 'firebase';

import ProfilePic from '../assets/placeholder-profile.jpg'
import Color from '../constants/Colors';
const MyComponent = () => (
    <Avatar.Image size={300} source={ProfilePic} />
);
import FirebaseSDK from '../config/FirebaseSDK';
import Colors from '../constants/Colors';

class ProfileEditor extends React.Component {

    state = {
        imageURL: ''
    }

    onImageUpload = async () => {
        const user = firebase.auth().currentUser

        const { status: cameraRollPerm } = await Permissions.askAsync(
            Permissions.CAMERA_ROLL, Permissions.CAMERA
        );
        try {
            // only if user allows permission to camera roll
            if (cameraRollPerm === 'granted') {
                console.log('choosing image granted...');
                let pickerResult = await ImagePicker.launchImageLibraryAsync({
                    allowsEditing: true,
                    aspect: [4, 3],
                });
                console.log(
                    'ready to upload... pickerResult json:' + JSON.stringify(pickerResult)
                );

                var wantedMaxSize = 150;
                var rawheight = pickerResult.height;
                var rawwidth = pickerResult.width;

                var ratio = rawwidth / rawheight;
                var wantedwidth = wantedMaxSize;
                var wantedheight = wantedMaxSize / ratio;
                // check vertical or horizontal
                if (rawheight > rawwidth) {
                    wantedwidth = wantedMaxSize * ratio;
                    wantedheight = wantedMaxSize;
                }
                console.log("scale image to x:" + wantedwidth + " y:" + wantedheight);
                let resizedUri = await new Promise((resolve, reject) => {
                    ImageEditor.cropImage(pickerResult.uri,
                        {
                            offset: { x: 0, y: 0 },
                            size: { width: pickerResult.width, height: pickerResult.height },
                            displaySize: { width: wantedwidth, height: wantedheight },
                            resizeMode: 'contain',
                        },
                        (uri) => resolve(uri),
                        () => reject(),
                    );
                });
                let uploadUrl = await FirebaseSDK.uploadImage(resizedUri);
                //let uploadUrl = await FirebaseSDK.uploadImageAsync(resizedUri);
                await this.setState({ imageURL: pickerResult.uri })
                await this.setState({ avatar: uploadUrl });
                console.log(" - await upload successful url:" + uploadUrl);
                console.log(" - await upload successful avatar state:" + this.state.avatar);
                await FirebaseSDK.updateAvatar(uploadUrl); //might failed
            }
        } catch (err) {
            console.log('onImageUpload error:' + err.message);
            alert('Upload image error:' + err.message);
        }
        user.updateProfile({
            photoURL: this.state.imageURL
        })
    };

    render() {
        return (
            <View style={styles.viewPort}>
                <View style={styles.profileEditorScreen}>
                    <View style={styles.avatar}>
                        <MyComponent />
                    </View>
                    <View style={styles.profileData}>
                        <TouchableOpacity
                            onPress={this.onImageUpload}>
                            <Text style={{ color: "#0000FF" }}>
                                Upload an Avatar
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    viewPort: {
        flex: 1,
        height: '100%',
        backgroundColor: Color.primary,
    },
    profileEditorScreen: {
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatar: {
        paddingBottom: 15,
    },
    username: {
        color: Color.accent1,
        fontWeight: 'bold',
        fontSize: 20,
    },
    email: {
        color: Color.accent2,
        fontSize: 15,
    },
    profileData: {
        alignItems: 'center',
    },
});

export default ProfileEditor;