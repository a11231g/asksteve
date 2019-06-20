import { put, select } from 'redux-saga/effects';
import { handleSagaError } from '../../utils/handleSagaError';
import NavigationService from "../../navigators/NavigationService";

export const SEARCH_COMMITS = 'askSteve/SEARCH_COMMITS/SEARCH_COMMITS';
export const SEARCH_COMMITS_FAILURE = 'askSteve/SEARCH_COMMITS/SEARCH_COMMITS_FAILURE';
export const SEARCH_COMMITS_SUCCESSFUL = 'askSteve/SEARCH_COMMITS/SEARCH_COMMITS_SUCCESSFUL';
export const INCREASE_PAGE_NUMBER = "askSteve/search/INCREASE_PAGE_NUMBER";
export const PAGINATION_STATE = "askSteve/search/PAGINATION_STATE";
export const FETCHING = "askSteve/search/FETCHING";


const initialState = {
    loading: false,
    loaded: false,
    result: [],
    pagination: 1,
    paginationEnded: false,
    fetching: false,
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case SEARCH_COMMITS:
            return {
                ...state,
                loading: !action.more,
            };
        case SEARCH_COMMITS_SUCCESSFUL:
            return {
                ...state,
                loading: false,
                result: action.result,
                fetching: false,
            };
        case SEARCH_COMMITS_FAILURE:
            return {
                ...state,
                loading: false,
                fetching: false,

            };
        case INCREASE_PAGE_NUMBER:
            return {
                ...state,
                pagination: action.number
            };
        case PAGINATION_STATE:
            return {
                ...state,
                paginationEnded: action.state
            };
        case FETCHING:
            return {
                ...state,
                fetching: action.fetching
            };
        default:
            return state;
    }
}



export function searchCommits(project, navigate, more) {
    return {
        type: SEARCH_COMMITS,
        project,
        navigate,
        more,
    }

}

export function searchCommitsSuccessful(result) {
    return {
        type: SEARCH_COMMITS_SUCCESSFUL,
        result
    }

}
export function searchCommitsFailure() {
    return {
        type: SEARCH_COMMITS_FAILURE
    }

}

export function NextPageNumber(number) {
    return {
        type: INCREASE_PAGE_NUMBER,
        number
    };
}

export function paginationEndedState(state) {
    return {
        type: PAGINATION_STATE,
        state
    };
}

export function fetching(fetching) {
    return {
        type: FETCHING,
        fetching
    };
}

export function* watchSearchCommits(client, { project, navigate,  more }) {
    try {
        console.log('comes here')
        const isFetching = yield select(state => state.searchCommits.fetching);
        if (isFetching) {
            return false;
        }

        yield put(fetching(true));

        let CurrentPage = 1;
        if (more) {
            CurrentPage = yield select(state => state.searchCommits.pagination);
        }

        const ended = yield select(state => state.searchCommits.paginationEnded);

        if (!ended) {
            const response = yield client.get(`repos/${project}/commits?page=${CurrentPage}`);

            yield put(NextPageNumber(CurrentPage + 1));

            if (response.length < 30) {
                console.log('ended')
                yield put(paginationEndedState(true));
            }
            if (CurrentPage === 1) {
                console.log('page one')
                yield put(searchCommitsSuccessful(response))
            } else if (more) {
                console.log('add more')
                const oldArray = yield select(state => state.searchCommits.result);
                const newArray = oldArray.concat(response);
                yield put(searchCommitsSuccessful(newArray));
            }

            if(navigate){
                NavigationService.navigate('RepositoryCommits', {project: project})
            }
        }
    } catch (error) {
        yield put(searchCommitsFailure());
        yield handleSagaError(error);
    }
}
