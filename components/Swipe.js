import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Card } from 'react-native-elements';
import profile from './data';

class Swipe extends Component {
    renderCardItem = (profile, i) => {
        return (
            <Card title={profile.name} titleStyle={{ fontSize: 14 }} key={i}>
                <View style={{ height: 200 }}>
                </View>
                <View style={styles.detailWrapper}>
                    <Text>City: {profile.city}</Text>
                    <Text>Schedule: {profile.schedule}</Text>
                    <Text>Type of Workout: {profile.typeOfWorkout}</Text>
                    <Text>Prefered Music: {profile.music}</Text>
                </View>
            </Card>
        );
    };

    renderCards = () => {
        return this.props.profile.map(this.renderCardItem);
    }
    render() {
        return <View>{this.renderCards()}</View>
    }
};

const styles = {
    detailWrapper: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 10
    }
};

export default Swipe;