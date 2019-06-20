import { StyleSheet } from 'react-native';

export default  StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f9f9f9",
        padding: 15,
        borderBottomWidth: 1,
        borderColor: '#bbb',
        borderStyle: 'solid'
    },
    header: {
        fontWeight: 'bold',
        textAlign: 'left',
        fontSize: 12,
        marginBottom: 5
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    avatar: {
        width: 20,
        height: 20,
        marginRight: 5
    },
    sub: {
        fontSize: 10,
    },
    bold: {
        fontWeight: 'bold'
    }
})
