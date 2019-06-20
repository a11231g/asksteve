import React, {Component} from 'react';
import {createAppContainer, createSwitchNavigator, createStackNavigator} from 'react-navigation';
import {
    Splash,
    Intro,
    Username,
    Password,
    Project,
    RepositoryCommits
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

const InAppNavigator = createStackNavigator({
    Project: {
        screen: Project,
        navigationOptions: () => ({title: 'search for commits'})
    },
    RepositoryCommits: {
        screen: RepositoryCommits,
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
    },
    InAppNavigator: {
        screen: InAppNavigator
    }
}, {gesturesEnabled: true,});
export default createAppContainer(NavigationStack);

