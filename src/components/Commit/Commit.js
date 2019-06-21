import React, { PureComponent } from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './CommitStyle';

export default class Commit extends PureComponent {
    static propTypes = {
        data: PropTypes.objectOf(PropTypes.any).isRequired,
    };

    render() {
        const { data } = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.header}>{data.commit.message.split(/\r?\n/)[0]}</Text>
                <View style={styles.row}>
                    {data.author && data.author.avatar_url
                        ? <Image source={{uri: data.author.avatar_url}} style={styles.avatar} />
                        : null
                    }
                    <Text style={styles.sub}>
                        {data.author && data.author.login
                            ? <Text style={styles.bold}>{data.author.login}</Text>
                            : ''
                        } authored and <Text style={styles.bold}>{data.commit.committer.name.replace(' ', '_')}</Text></Text>
                </View>
            </View>
        );
    }
}

