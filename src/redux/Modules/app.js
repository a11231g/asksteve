export const SKIP_INTRO = 'askSteve/app/SKIP_INTRO';
export const UPDATE_USER_TOKEN = 'askSteve/app/UPDATE_USER_TOKEN';



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
