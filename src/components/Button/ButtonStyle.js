import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    default: {
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
        borderRadius: 3,
    },
    primary: {
        backgroundColor: '#1e87f0',
        borderRadius: 3,
    },
    small: {
        height: 40,
    },
    medium: {
        height: 50,
    },
    secondary: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#1e87f0',
        borderRadius: 3
    },
    success: {
        backgroundColor: '#26c36c'
    },
    defaultContent: {
        textAlign: 'center'
    },
    primaryContentText: {
        color: '#eee',
        fontSize: 16
    },
    secondaryContentText: {
        color: '#1e87f0',
        fontSize: 16

    },
    successContentText: {
        color: '#ffffff',
        fontSize: 16
    },
    smallContentText: {
        fontSize: 14,
    },
    mediumContentText: {
        fontSize: 16
    },
    contentWrapper: {
        flexDirection: 'row'
    },
    icon: {
        justifyContent: 'center'
    },
    separator: {
        width: 2,
        backgroundColor: '#aaa',
        margin: 5
    }
});
