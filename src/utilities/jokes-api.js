import senRequest from './send-request';
const BASE_URL = '/api/jokes';

export function showJokes() {
    return(`${BASE_URL}/jokes`);
}

