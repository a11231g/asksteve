import{ StatusBar } from 'react-native';
import NavigationService from "../../navigators/NavigationService";
export const REHYDRATE_SUCCESS = "eventMAster/rehydrate/REHYDRATE_SUCCESS";
export const START_REHYDRATE = "eventMAster/rehydrate/START_REHYDRATE";

export function startRehydrate(error) {
    return {
        type: START_REHYDRATE,
        error
    };
}
export function rehydrateSuccess() {
    return {
        type: REHYDRATE_SUCCESS
    };
}

export function* watchRehydrate(store) {
    const persist = store.getState();
    if (
        persist &&
        persist.app &&
        persist.app.user &&
        persist.app.user.name
    ) {
        StatusBar.setBarStyle('light-content', false);
        NavigationService.navigate("InAppNavigator");

    } else {
        if (
            persist &&
            persist.app &&
            persist.app.SkippIntro
        ) {
            NavigationService.navigate("beforeLogin");
        } else {
            NavigationService.navigate("Intro");
        }
    }
    yield store.dispatch(rehydrateSuccess());
}
