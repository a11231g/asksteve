import React, { PureComponent } from 'react';
import {
    View,
    FlatList,
    Text, TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './RepositoryCommitsStyle';
import Commit from '../../components/Commit/Commit'
import { searchCommits } from '../../redux/Modules/searchCommits';
import { logout } from '../../redux/Modules/app';

class RepositoryCommits extends PureComponent {
    static propTypes = {
        loginConnect: PropTypes.func.isRequired,
    };

    componentDidMount(): void {
        this.props.navigation.setParams({ logout: this.logout});
    }

    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        return {
            headerRight: (
                <TouchableOpacity
                    onPress={() => params.logout()}
                    style={{ marginRight: 10 }}
                    activeOpacity={0.95}
                >
                    <Text >Log out!</Text>
                </TouchableOpacity>
            ),
            title: `${navigation.state.params.project}`,
        };
    };

    logout = () => {
        this.props.logoutConnect();
    };

    /**
     * Flatlist pull to refresh
     */
    onRefresh = () => {
        const { navigation } = this.props;
        this.props.searchCommitsConnect(navigation.state.params.project, false, false)
    };

    /**
     * if flatlist scrolled to end it should fetch more data
     */

    more = () => {
        const { navigation } = this.props;
        this.props.searchCommitsConnect(navigation.state.params.project, false, true)
    };


    render() {
        const { loading, result } = this.props;
        return (
            <View style={styles.container}>
                <FlatList
                    refreshing={loading}
                    onRefresh={this.onRefresh}
                    data={result}
                    onEndReached={this.more}
                    renderItem={item => {
                        return ( <Commit data={item.item} key={item.index} />);
                    }}
                />
            </View>
        );
    }
}

export default connect(state => ({
    loading: state.searchCommits.loading,
    result: state.searchCommits.result
}), {
    searchCommitsConnect: searchCommits,
    logoutConnect: logout
})(RepositoryCommits);
