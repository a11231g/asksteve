import React, { PureComponent } from 'react';
import { StyleSheet, View, Dimensions, StatusBar, ActivityIndicator } from 'react-native';
import LottieView from 'lottie-react-native';


const { width, height } = Dimensions.get('window');

export default class Splash extends PureComponent {
    componentWillMount() {
        StatusBar.setBarStyle('dark-content', false);
        StatusBar.setBackgroundColor('white', true);

    }

    render() {
        return (
            <View style={styles.container}>
                <LottieView
                    source={require('../../animation/searchask-loop.json')}
                    ref={this.lottieAnimation}
                    autoPlay
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});
