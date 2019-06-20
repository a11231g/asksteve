import React, {Component} from 'react';
import {createAppContainer, createSwitchNavigator, createStackNavigator} from 'react-navigation';
import {
    Splash,
    Intro,
    Username,
    Password,
} from '../containers';

/**
 * app navigator: StackNavigator with 3 screens
 *
 */
const BeforeLoginStack = createStackNavigator({
    Username: {
        screen: Username,
        navigationOptions: () => ({header: null})
    },
    Password: {
        screen: Password,
        navigationOptions: () => ({header: null})

    },
}, {gesturesEnabled: true,});


const NavigationStack = createSwitchNavigator({
    Splash: {
        screen: Splash,
        navigationOptions: () => ({header: null})
    },
    Intro: {
       screen: Intro
    },
    beforeLogin: {
        screen: BeforeLoginStack
    }
}, {gesturesEnabled: true,});
export default createAppContainer(NavigationStack);

