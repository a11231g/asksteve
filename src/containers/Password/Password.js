import React, { PureComponent } from 'react';
import {
    View,
    TextInput
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './PasswordStyle';
import { login } from '../../redux/Modules/auth';
import Button from '../../components/Button/Button';

class Username extends PureComponent {
    static propTypes = {
        loginConnect: PropTypes.func.isRequired,
    };

    state = {
        password: ''
    };

    submit = () => {
        const { password } = this.state;
        const { loginConnect } = this.props;
        loginConnect({password})
    };


    render() {
        const { password } = this.state;
        const { loginLoader } = this.props;
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.Input}
                    placeholder={'enter your github password.'}
                    onChangeText={(password) => this.setState({ password })}
                    value={password}
                    secureTextEntry
                    returnKeyType={'go'}
                    onSubmitEditing={this.submit}
                />
                <Button
                    type="primary"
                    size="medium"
                    onPress={this.submit}
                    disabled={!password}
                    loading={loginLoader}
                >
                    Login
                </Button>
            </View>
        );
    }
}

export default connect(state => ({
    loginLoader: state.auth.loginLoader
}), {
    loginConnect: login
})(Username);
