import { combineReducers } from 'redux';
import VehicleReducer from './vehicle';
import AuthenticationReducer from './authentication';

const rootReducer = combineReducers( {
    vehicle: VehicleReducer,
    authentication: AuthenticationReducer,
} );

export default rootReducer;