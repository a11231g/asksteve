import { call, put, select, take } from 'redux-saga/effects';

import Toast from 'react-native-root-toast';
import { saveUser } from './app';
import { handleSagaError } from '../../utils/handleSagaError';
import NavigationService from "../../navigators/NavigationService";




export const SAVE_USERNAME = 'askSteve/auth/SAVE_USERNAME';
export const LOGIN = 'askSteve/auth/LOGIN';
export const LOGIN_SUCCESS = 'askSteve/auth/LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'askSteve/auth/LOGIN_FAILURE';




const initialState = {
    loginLoader: false,
    username: ''

};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case SAVE_USERNAME:
            return {
                ...state,
                username: action.username
            };
        case LOGIN:
            return {
                ...state,
                loginLoader: true
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                loginLoader: false,
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                loginLoader: false,
            };
        default:
            return state;
    }
}



export function login({ password }) {
    return {
        type: LOGIN,
        password
    };
}

export function loginSuccess() {
    return {
        type: LOGIN_SUCCESS,
    };
}

export function loginFailure(error) {
    return {
        type: LOGIN_FAILURE,
        error
    };
}
export function* watchLogin(client, { password }) {
    try {
        const username = yield select(state => state.auth.username);
        const options  = {headers: {}};
        options.headers.authorization = `Basic ${btoa(`${username}:${password}`)}`;
        const response = yield client.get('user',  options );
        yield put(loginSuccess())

        yield put(saveUser(response))
        Toast.show(`Hi ${response.name}!`, {
            duration: Toast.durations.LONG,
            position: Toast.positions.TOP,
            shadow: true,
            animation: true,
            hideOnPress: true,
            delay: 0,
        });

        yield put(loginSuccess())
    } catch (error) {
        NavigationService.goBack();
        yield put(loginFailure());
        yield handleSagaError(error);
    }
}


export function setUsername(username) {
    return {
        type: SAVE_USERNAME,
        username
    }
}
