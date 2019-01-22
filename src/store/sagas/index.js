import { takeEvery, all } from 'redux-saga/effects'
import { postAuthenticationSaga } from './authenticationSagas';
import { fetchLicensePlateAndPostSaga, getAllVehiclesSaga, deleteVehicleByNumberSaga } from './vehicleSagas';
import { types as authTypes } from '../reducers/authentication';
import { types as vehicleTypes } from '../reducers/vehicle';


export default function* rootSaga () {
    yield all([
        takeEvery(vehicleTypes.VEHICLE_FETCH_AND_POST_REQUESTED, fetchLicensePlateAndPostSaga),
        takeEvery(vehicleTypes.VEHICLES_GET_REQUESTED, getAllVehiclesSaga),
        takeEvery(vehicleTypes.VEHICLE_DELETE_REQUESTED, deleteVehicleByNumberSaga),
        takeEvery(authTypes.AUTHENTICATION_POST_REQUESTED, postAuthenticationSaga),
    ])
  }