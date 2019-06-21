import NavigationService from "../../navigators/NavigationService";

export const SKIP_INTRO = 'askSteve/app/SKIP_INTRO';
export const UPDATE_USER_TOKEN = 'askSteve/app/UPDATE_USER_TOKEN';
export const LOG_OUT = 'askSteve/auth/LOG_OUT';


const initialState = {
    SkippIntro: false,
    user: {},
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case SKIP_INTRO:
            return {
                ...state,
                SkippIntro: true
            };
        case UPDATE_USER_TOKEN:
            return {
                ...state,
                user: action.user,
            };
        case LOG_OUT:
            return {
                ...state,
                user: {}
        };
        default:
            return state;
    }
}


export function skipIntro() {
    return {
        type: SKIP_INTRO,
    };
}
export function saveUser(user) {
    return {
        type: UPDATE_USER_TOKEN,
        user,
    }

}

export function logout() {
    return {
        type: LOG_OUT,
    };
}
export function* watchLogout(client, ) {
    try {
        NavigationService.navigate('beforeLogin')
    } catch (error) {

    }
}

