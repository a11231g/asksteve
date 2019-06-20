// import { NavigationActions } from 'react-navigation';
// import { take } from 'redux-saga/effects';
// import { Platform, StatusBar } from 'react-native';
// import DeviceInfo from 'react-native-device-info';
// import { LOAD_USER_SUCCESS, loadUser, setJwt } from './auth';
// import { load as loadConfig } from './config';
// import { check } from './period';
//
// export const REHYDRATE_SUCCESS = 'jopp/rehydrate/REHYDRATE_SUCCESS';
//
// export function rehydrateSuccess() {
//     return {
//         type: REHYDRATE_SUCCESS
//     };
// }
//
// export function* watchRehydrate(store, client, action) {
//     try {
//         yield store.dispatch(loadConfig());
//         const response = yield client.get('check/' + Platform.OS + '/' + DeviceInfo.getVersion());
//         if (response.success && response.result) {
//             if (response.result.checkPeriod) {
//                 yield store.dispatch(check(true));
//             } else {
//                 yield store.dispatch(check(false));
//             }
//             if (response.result.forceUpdate) {
//                 store.dispatch(NavigationActions.reset({
//                     index: 0,
//                     actions: [NavigationActions.navigate({ routeName: 'ForceUpdate' })]
//                 }));
//                 return false;
//             }
//         }
//     } catch (e) {
//         console.log(e)
//         yield store.dispatch(check(false));
//     }
//     if (action.payload && action.payload.auth && action.payload.auth.jwt) {
//         StatusBar.setBarStyle('dark-content', false);
//         StatusBar.setBackgroundColor('white', true);
//         yield store.dispatch(setJwt(action.payload.auth.jwt));
//         yield store.dispatch(loadUser());
//         const payLoadUserSuccess = yield take(LOAD_USER_SUCCESS);
//         const user = payLoadUserSuccess.user;
//         if (user && user.professions && user.professions.length > 0) {
//             store.dispatch(NavigationActions.reset({
//                 index: 0,
//                 actions: [NavigationActions.navigate({ routeName: 'Tabs' })]
//             }));
//         } else {
//             store.dispatch(NavigationActions.reset({
//                 index: 0,
//                 actions: [NavigationActions.navigate({ routeName: 'CustomerTabs' })]
//             }));
//         }
//     } else {
//         store.dispatch(NavigationActions.reset({
//             index: 0,
//             actions: [NavigationActions.navigate({ routeName: 'Landing' })]
//         }));
//     }
//     yield store.dispatch(rehydrateSuccess());
// }

import{ StatusBar } from 'react-native';
// import {
//     setJwt,
//     clearLoader,
//     refreshToken,
//     REFRESH_TOKEN_CHECKED,
//     REGISTER_FAILURE
// } from "./auth";
import { call, put, cps, select, take } from "redux-saga/effects";
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

export function* watchRehydrate(store, client, action) {
    const persist = store.getState();
    if (
        persist &&
        persist.auth &&
        persist.auth.jwt &&
        persist.auth.jwt.access_token
    ) {
        StatusBar.setBarStyle('light-content', false);
        // yield store.dispatch(setJwt(persist.auth.jwt));
        // const user = persist.auth.user;
        // yield put(refreshToken());
        // const resp = yield take(REFRESH_TOKEN_CHECKED);
        // if (resp.state === "failed") {
        //     NavigationService.navigateAndReset("Register");
        // } else {
        //     if (
        //         user &&
        //         user.favorite_category_ids &&
        //         user.favorite_category_ids.length > 2
        //     ) {
        //         NavigationService.navigate("Tabs");
        //     } else {
        //         NavigationService.navigate("Interest");
        //     }
        // }
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
