// Actions
export const types = {
    AUTHENTICATION_POST_REQUESTED: 'AUTHENTICATION_POST_REQUESTED',
    AUTHENTICATION_POST_SUCCEEDED: 'AUTHENTICATION_POST_SUCCEEDED',
    AUTHENTICATION_POST_FAILED: 'AUTHENTICATION_POST_FAILED',
}


const initialState = {
    authenticated : false,
    errorMessage : null,
    authToken : null,
};

export default function reducer( state = initialState, action = {} ) {
    switch ( action.type ) {
        case types.AUTHENTICATION_POST_REQUESTED: {
            return {...state}
        }
        case types.AUTHENTICATION_POST_SUCCEEDED: {
            return {...state, authenticated: true, authToken: action.payload}
        }
        case types.AUTHENTICATION_POST_FAILED: {
            return {...state, errorMessage: action.payload}
        }
        default:
            return state;
    }
}