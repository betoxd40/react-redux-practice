import { call, put } from 'redux-saga/effects'
import { postAuthentication } from '../api';
import { types as authTypes } from '../reducers/authentication'; 

function* postAuthenticationSaga() {
    try {
        const responseAuthentication = yield call(postAuthentication);
        const authToken = responseAuthentication.data.auth_token;
        yield put({type: authTypes.AUTHENTICATION_POST_SUCCEEDED, payload: authToken});
    } catch (e) {
        yield put({type: authTypes.AUTHENTICATION_POST_FAILED, payload: e.message});
    }
}

export { postAuthenticationSaga };