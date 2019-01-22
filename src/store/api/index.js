import axios from 'axios';

const apiRWDUrl = process.env.API_RWD_FOR_LICENSE_PLATES_URL || 'https://opendata.rdw.nl/resource/m9d7-ebf2.json';

const apiGoogleKey = process.env.GOOGLE_KEY || 'AIzaSyCYE0gXeY5tIWlJYucl0ZAuBwQ7gdyuIQM';
const apiGoogleCX = process.env.GOOGLE_CX || '009973936156204013139:nrb9qxuk0na';
const apiGoogleImageUrl = process.env.API_GOOGLE_IMAGE_URL || 'https://www.googleapis.com/customsearch/v1';

const apiBackendUrl = process.env.API_BACKEND || 'https://arcane-scrubland-64110.herokuapp.com/';

var dataForAuthentication = {
    email: 'user1@test.rb',
    password: 'test',
}
// POST /auth/login
const postAuthentication = () => axios.post(`${apiBackendUrl}/auth/login`, dataForAuthentication);

const fetchLicensePlate = licensePlate => axios.get(`${apiRWDUrl}?kenteken=${licensePlate}`);
const fetchVehicleImage = brand => axios.get(`${apiGoogleImageUrl}?q=${brand}&cx=${apiGoogleCX}&num=5&key=${apiGoogleKey}`);

// GET /vehicles
const getAllVehicles = token => axios.get(`${apiBackendUrl}vehicles`, { headers: { "Authorization": `Bearer ${token}` } });
// GET /vehicles/id
const getVehicleById = (token, id) => axios.get(
    `${apiBackendUrl}/${id}`, { headers: { "Authorization": `Bearer ${token}` } });
// GET /vehicles/search/LicensePlate
const getVehicleByLicensePlate = (token, licensePlate) => axios.get(
    `${apiBackendUrl}/search/${licensePlate}`, { headers: { "Authorization": `Bearer ${token}` } });
// PUT /vehicles/id
const updateVehicleById = (token, id) => axios.put(
    `${apiBackendUrl}/${id}`, { headers: { "Authorization": `Bearer ${token}` } });
//DELETE /vehicles/id
const deleteVehicleById = (token, id) => axios.delete(
    `${apiBackendUrl}vehicles/${id}`, { headers: { "Authorization": `Bearer ${token}` } });
// POST /vehicles
const postVehicle = (token, data) => axios.post(
    `${apiBackendUrl}vehicles`, data, { headers: { "Authorization": `Bearer ${token}` } });


export {
    fetchLicensePlate,
    fetchVehicleImage,
    postAuthentication,
    getAllVehicles,
    postVehicle,
    deleteVehicleById,
};