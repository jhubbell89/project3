import sendRequest from './send-request';
const BASE_URL = '/api/jokes';

export function showJokes() {
    return sendRequest(`${BASE_URL}`, 'GET');
}

export function newJoke() {
    return sendRequest(`${BASE_URL}/new`, 'GET')
}

export function createJoke() {
    return sendRequest(`${BASE_URL}`, 'POST')
}

export function deleteJoke() {
    return sendRequest(`${BASE_URL}`, 'DELETE')
}

export function editJoke() {
    return sendRequest(`${BASE_URL}`, 'GET')
}

export function updateJoke() {
    return sendRequest(`${BASE_URL}`, 'PUT')
}