import Toast from 'react-native-root-toast'

export function* handleSagaError(error, action, username) {
    try {

        const msg = yield error.json();
        console.log(msg);
        Toast.show(msg.message, {
            duration: Toast.durations.LONG,
            position: Toast.positions.TOP,
            shadow: true,
            animation: true,
            hideOnPress: true,
            delay: 0,
        });

    } catch (error) {

    }
}
