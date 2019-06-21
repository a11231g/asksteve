import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, ActivityIndicator, Text } from 'react-native';
import styles from './ButtonStyle';

export default class Button extends PureComponent {
    static propTypes = {
        type: PropTypes.oneOf(['primary', 'secondary', 'success']),
        children: PropTypes.any.isRequired,
        onPress: PropTypes.func,
        loading: PropTypes.bool,
        disabled: PropTypes.bool,
        style: PropTypes.objectOf(PropTypes.any),
        size: PropTypes.oneOf(['small', 'medium']),
    };

    static defaultProps = {
        loading: false,
        disabled: false,
        type: 'primary',
        style: {},
        size: 'small',
        children: ''
    };

    handlePress = () => {
        const { loading, onPress, disabled } = this.props;
        if (!loading && !disabled && onPress) {
            onPress();
        }
    };
    renderButton = () => {
        const { type, disabled, loading, children, style, size } = this.props;
        if (disabled) {
            return (<View
                style={[styles.default, styles[type], style, { opacity: 0.2 }]}
            >
                <View style={[styles.defaultContent, styles[`${type}Content`]]}>
                    {
                        loading ? <ActivityIndicator color="#fff" /> :
                            <View style={styles.contentWrapper}>
                                <Text style={[styles[`${type}ContentText`], styles[`${size}ContentText`]]}>{children}</Text>
                            </View>
                    }
                </View>
            </View>);
        }
        return (<TouchableOpacity
            style={[styles.default, styles[type], style]}
            onPress={this.handlePress}
        >
            <View style={[styles.defaultContent, styles[`${type}Content`]]}>
                {
                    loading ? <ActivityIndicator color="#fff" /> :
                        <View style={[styles.defaultContent, styles[`${type}Content`]]}>
                            <Text style={[styles[`${type}ContentText`], styles[`${size}ContentText`]]}>{children}</Text>
                        </View>
                }
            </View>
        </TouchableOpacity>);
    };

    render() {
        return (
            this.renderButton()
        );
    }
}
