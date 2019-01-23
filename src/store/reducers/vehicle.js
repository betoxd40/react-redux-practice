
// Arquitechture DUCK
// Actions

export const types = {
    HANDLE_CHANGE: 'HANDLE_CHANGE',

    VEHICLE_FETCH_REQUESTED: 'VEHICLE_FETCH_REQUESTED',
    VEHICLE_FETCH_SUCCEEDED:  'VEHICLE_FETCH_SUCCEEDED',
    VEHICLE_FETCH_FAILED: 'VEHICLE_FETCH_FAILED',
    
    VEHICLES_GET_REQUESTED: 'VEHICLES_GET_REQUESTED',
    VEHICLES_GET_SUCCEEDED:  'VEHICLES_GET_SUCCEEDED',
    VEHICLES_GET_FAILED: 'VEHICLES_GET_FAILED',
    VEHICLE_POST_REQUESTED: 'VEHICLE_POST_REQUESTED',
    VEHICLE_POST_SUCCEEDED:  'VEHICLE_POST_SUCCEEDED',
    VEHICLE_POST_FAILED: 'VEHICLE_POST_FAILED',
    VEHICLE_DELETE_REQUESTED: 'VEHICLE_DELETE_REQUESTED',
    VEHICLE_DELETE_SUCCEEDED:  'VEHICLE_DELETE_SUCCEEDED',
    VEHICLE_DELETE_FAILED: 'VEHICLE_DELETE_FAILED',
}


const initialState = {
    vehicles: {},
    vehicleInfo : {},
    licensePlate : '',
    loading: false,
};

export default function reducer( state = initialState, action = {} ) {
    switch ( action.type ) {
        case types.HANDLE_CHANGE: {
            return { ...state, [action.payload.name]: action.payload.value,  };
        }
        case types.VEHICLE_FETCH_REQUESTED: {
            return {...state, loading: true}
        }
        case types.VEHICLE_FETCH_SUCCEEDED: {
            return {...state, loading: false, vehicleInfo: action.payload}
        }
        case types.VEHICLE_FETCH_FAILED: {
            return {...state, loading: false}
        }
        case types.VEHICLES_GET_REQUESTED: {
            return {...state, loading: true}
        }
        case types.VEHICLES_GET_SUCCEEDED: {
            return {...state, loading: false, vehicles: action.payload}
        }
        case types.VEHICLES_GET_FAILED: {
            return {...state, loading: false}
        }
        case types.VEHICLE_POST_REQUESTED: {
            return {...state, loading: true}
        }
        case types.VEHICLE_POST_SUCCEEDED: {
            return {...state, loading: false, vehicles: action.payload}
        }
        case types.VEHICLE_POST_FAILED: {
            return {...state, loading: false}
        }
        case types.VEHICLE_DELETE_REQUESTED: {
            return {...state, loading: true}
        }
        case types.VEHICLE_DELETE_SUCCEEDED: {
            return {...state, loading: false, vehicles: action.payload}
        }
        case types.VEHICLE_DELETE_FAILED: {
            return {...state, loading: false}
        }
        default:
            return state;
    }
}

// Actions Creators
export function handleChange( change ) {
    return {
        type: types.HANDLE_CHANGE,
        payload: change,
    };
}