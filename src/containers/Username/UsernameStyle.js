import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default  StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(254,200,54, 0.8)",
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center'

    },
    register: {
        color: '#1caff6',
        alignSelf: 'center',
        marginTop: 20
    },
    image: {
        width,
        height,
        justifyContent: 'center'
    },
    wrapper: {
        justifyContent: 'center',
        alignSelf: 'center',
        paddingLeft: 30,
        paddingRight: 30,
        width
    },
    Input: {
        width: '100%',
        backgroundColor: '#fff',
        borderStyle: 'solid',
        borderWidth:1,
        borderColor: '#777',
        height: 40,
        marginBottom: 15,
        paddingLeft: 10,
        borderRadius: 10
    }
})
