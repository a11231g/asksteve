import { all, takeEvery } from 'redux-saga/effects';
import { watchRehydrate, START_REHYDRATE } from "./Modules/rehydrate";

import {
    LOGIN as LOGIN_USER,
    watchLogin as watchLoginUser,
} from './Modules/auth';

import {
    SEARCH_COMMITS,
    watchSearchCommits,
} from './Modules/searchCommits';


export default function* root(client, store) {
    yield all([
        takeEvery(START_REHYDRATE, watchRehydrate, store, client),
        takeEvery(LOGIN_USER, watchLoginUser, client),
        takeEvery(SEARCH_COMMITS, watchSearchCommits, client),
    ]);
}

