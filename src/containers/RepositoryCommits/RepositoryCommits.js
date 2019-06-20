import React, { PureComponent } from 'react';
import {
    View,
    FlatList,
    Text
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './RepositoryCommitsStyle';
import Commit from '../../components/Commit/Commit'
import { searchCommits } from '../../redux/Modules/searchCommits';

class RepositoryCommits extends PureComponent {
    static propTypes = {
        loginConnect: PropTypes.func.isRequired,
    };
    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.project}`,
    });

    onRefresh = () => {
        const { navigation } = this.props;
        this.props.searchCommitsConnect(navigation.state.params.project, false, false)
    };

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
    searchCommitsConnect: searchCommits
})(RepositoryCommits);
