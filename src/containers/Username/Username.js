import React, { PureComponent } from 'react';
import {
    View,
    TextInput
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './UsernameStyle';
import { setUsername } from '../../redux/Modules/auth';
import Button from '../../components/Button/Button';
import NavigationService from "../../navigators/NavigationService";

class Username extends PureComponent {
    static propTypes = {
        username: PropTypes.string.isRequired,
        setUsernameConnect: PropTypes.func.isRequired,
    };

    componentDidMount(): void {
        const { username } = this.props;
        if(username){
            this.setState({ username })
        }
    }

    state = {
        username: ''
    };

    submit = () => {
        const { setUsernameConnect } = this.props;
        const { username } = this.state;

        setUsernameConnect(username);
        NavigationService.navigate('Password')
    };


    render() {
        const { username } = this.state;
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.Input}
                    placeholder={'enter your github username.'}
                    onChangeText={(username) => this.setState({ username })}
                    value={username}
                    returnKeyType={'go'}
                    onSubmitEditing={this.submit}
                />
                <Button
                    type="primary"
                    size="medium"
                    onPress={this.submit}
                    disabled={!username}
                >
                    NEXT!
                </Button>
            </View>
        );
    }
}

export default connect(state => ({
    username: state.auth.username
}), {
    setUsernameConnect: setUsername
})(Username);
