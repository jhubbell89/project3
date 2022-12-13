import sendRequest from './send-request';
const BASE_URL = '/api/jokes';

export function showJokes() {
    return sendRequest(`${BASE_URL}`, 'GET');
}

export function newJoke() {
    return sendRequest(`${BASE_URL}/new`, 'GET')
}

export function createJoke(newJokeData) {
    return sendRequest(`${BASE_URL}`, 'POST', newJokeData);
}

export function deleteJoke(id) {
    return sendRequest(`${BASE_URL}/${id}`, 'DELETE')
}

export function editJoke(id) {
    console.log('editjoke api start')
    return( sendRequest(`${BASE_URL}/${id}/edit`, 'GET'),
    console.log('editjoke api end'))
}

export function updateJoke(form, id) {
    console.log(id)
    return sendRequest(`${BASE_URL}/${id}`, 'PUT')
}