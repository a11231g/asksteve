import React, { PureComponent } from 'react';
import {
    View,
    TextInput
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './ProjectStyle';
import { searchCommits } from '../../redux/Modules/searchCommits';
import Button from '../../components/Button/Button';

class Username extends PureComponent {
    static propTypes = {
        searchCommitsConnect: PropTypes.func.isRequired,
        loading: PropTypes.bool.isRequired,
    };

    /**
     * default name of repository to search for commits
     */

    state = {
        project: 'facebook/react-native'
    };

    submit = () => {
        const { project } = this.state;
        const { searchCommitsConnect } = this.props;

        searchCommitsConnect(project, true, false);
    };

    /**
     * it searches for github repository and if it founded , shows the commits on the next screen
     */

    render() {
        const { project } = this.state;
        const { loading } = this.props;
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.Input}
                    placeholder={'github repository name like (facebook/react-native)'}
                    onChangeText={(project) => this.setState({ project })}
                    value={project}
                    returnKeyType={'go'}
                    onSubmitEditing={this.submit}
                />
                <Button
                    type="primary"
                    size="medium"
                    onPress={this.submit}
                    disabled={!project}
                    loading={loading}
                >
                    Find commits.
                </Button>
            </View>
        );
    }
}

export default connect(state => ({
    loading: state.searchCommits.loading
}), {
    searchCommitsConnect: searchCommits
})(Username);
