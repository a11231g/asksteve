import React, { Component } from 'react';
import { I18nManager } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react'
import { useScreens } from 'react-native-screens';
import createStore from './src/redux/create'
import Splash from './src/containers/Splash/Splash';
import AppNavigator from './src/navigators/AppNavigator';


/**
 *  initialize the store and persistor and pass it to Provider and PersistGate
 */
import ApiClient from './src/utils/apiClient';
const client = new ApiClient();
const { store, persistor } = createStore(client);


useScreens();

console.disableYellowBox = true;

class App extends Component {
    componentDidMount() {
        I18nManager.allowRTL(false);
        I18nManager.forceRTL(false);
    }

    render() {
        return (
            <Provider store={store}>
                <PersistGate
                    loading={<Splash />}
                    persistor={persistor}
                >
                    <AppNavigator />
                </PersistGate>
            </Provider>
        );
    }
}

export default App;
