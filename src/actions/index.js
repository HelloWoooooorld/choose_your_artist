import axios from 'axios';
const URL = 'http://localhost:3004';

export function artistListAll(){
    const request = axios.get(`${URL}/artists?_limit=10`)
    .then(response => response.data)

    return{
        type: 'GET_ARTIST_ALL',
        payload: request
    }
}

export function altrisList(keywords) {
    const request = axios.get(`${URL}/artists?q=${keywords}`)
    .then(response => response.data)
    
    return{
        type: 'GET_ARTISTS',
        payload: request
    }
}


export function altristDetail(id) {
    const request = axios.get(`${URL}/artists?id=${id}`)
    .then(response => response.data)
    
    return{
        type: 'ARTISTS_DETAIL',
        payload: request
    }
}