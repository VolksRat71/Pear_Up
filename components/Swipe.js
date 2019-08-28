import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Card } from 'react-native-elements';

class Swipe extends Component {
    renderCardItem = (profile, i) => {
        return (
            <Card title={profile.name} style={{ fontSize: 30 }} titleStyle={{ fontSize: 25 }} key={i}>
                <View style={{ height: 315 }}>
                    <Image
                        source={require('./mockDB/profile_pic/Nate.jpg')}
                        style={{ width: '100%', height: 200, borderRadius: 15 }}
                    />
                    <Text>City: {profile.city}</Text>
                    <Text>Schedule: {profile.schedule}</Text>
                    <Text>Type of Workout: {profile.typeOfWorkout}</Text>
                    <Text>Prefered Music: {profile.music}</Text>
                    {/* 135 charactor limit */}
                    <Text>About Me: {profile.user_note}</Text>
                </View>
            </Card >
        );
    };

    // render bitch

    renderCards = () => {
        return this.props.profile.map(this.renderCardItem);
    }
    render() {
        return <View>{this.renderCards()}</View>
    }
};


export default Swipe;