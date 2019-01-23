import { call, put } from 'redux-saga/effects'
import { 
    fetchLicensePlate,
    fetchVehicleImage,
    getAllVehicles,
    postVehicle,
    deleteVehicleById,
} from '../api';
import { checkIfImageExist } from '../../utils';
import { types as vehicleTypes } from '../reducers/vehicle';

function* fetchLicensePlateSaga(action) {
    try {
        const responseFetchLicense = yield call( fetchLicensePlate, action.payload.licensePlate );
        console.log('licenseeee', responseFetchLicense);
        const responseFetchImage = yield call( fetchVehicleImage,  responseFetchLicense.data[0].merk );
        const imageUrl = checkIfImageExist(responseFetchImage.data.items);
        const vehicleData = {
            license_plate: action.payload.licensePlate,
            merk: responseFetchLicense.data[0].merk,
            handelsbenaming:  responseFetchLicense.data[0].handelsbenaming,
            voertuigsoort: responseFetchLicense.data[0].voertuigsoort || null,
            eerste_kleur: responseFetchLicense.data[0].eerste_kleur,
            aantal_zitplaatsen: responseFetchLicense.data[0].aantal_zitplaatsen || null,
            catalogusprijs: responseFetchLicense.data[0].catalogusprijs || null,
            imageUrl: imageUrl,
            }
        const response = yield call( postVehicle, action.payload.token, {vehicle: vehicleData} );
        console.log('el response del post es', response);
        yield put({type: vehicleTypes.VEHICLE_FETCH_SUCCEEDED, payload: vehicleData});

    } catch (e) {
        console.log('el error', e);
        yield put({type: vehicleTypes.VEHICLE_FETCH_FAILED, message: e.message});
    }
}

function* getAllVehiclesSaga(action) {
    try {
        const response = yield call( getAllVehicles, action.payload );
        console.log('los vehiculos son', response);
        yield put({type: vehicleTypes.VEHICLES_GET_SUCCEEDED, payload: response});
    } catch (e) {
        console.log('el error', e);
        yield put({type: vehicleTypes.VEHICLES_GET_FAILED, message: e.message});
    }
}

function* deleteVehicleByNumberSaga(action) {
    try {
        const response = yield call( deleteVehicleById, action.payload.token, action.payload.id );
        console.log('vehiculo eliminado', response);
        yield put({type: vehicleTypes.VEHICLE_DELETE_SUCCEEDED, payload: response});
    } catch (e) {
        console.log('el error', e);
        yield put({type: vehicleTypes.VEHICLE_DELETE_FAILED, message: e.message});
    }
}

export { fetchLicensePlateSaga, getAllVehiclesSaga, deleteVehicleByNumberSaga };