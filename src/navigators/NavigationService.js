import { NavigationActions, StackActions } from "react-navigation";

let navigator;

function setTopLevelNavigator(navigatorRef) {
    navigator = navigatorRef;
}

function navigate(routeName, params) {
    navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params
        })
    );
}

function navigateAndReset(routeName, params) {
    navigator.dispatch(
        StackActions.reset({
            index: 0,
            key: null,
            actions: [
                NavigationActions.navigate({
                    routeName,
                    params
                })
            ]
        })
    );
}

function goBack(key) {
    navigator.dispatch(
        NavigationActions.back({
            key: key
        })
    );
}

export default {
    navigate,
    navigateAndReset,
    goBack,
    setTopLevelNavigator,
};
