import React, { Component } from 'react';
import NavigationStack from './TopLevelNavigator';
import NavigationService from './NavigationService';
import { connect } from 'react-redux';
import  PropTypes  from 'prop-types';
import { startRehydrate } from '../redux/Modules/rehydrate'

class AppNavigator extends Component {

    componentDidMount() {
        this.props.startup();
    }

    render() {
        return (
            <NavigationStack
                ref={navigatorRef => {
                    NavigationService.setTopLevelNavigator(navigatorRef);
                }}
            />
        );
    }
}

AppNavigator.propTypes = {
    startup: PropTypes.func,
};

const mapStateToProps = (state) => ({});


export default connect(
    mapStateToProps,
    {
        startup: startRehydrate
    }
)(AppNavigator);

