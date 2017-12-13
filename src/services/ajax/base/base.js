import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/json';

const getHeader = (payload = {}, token = '') => {
    return {
        'headers': {
            'crossDomain': true,
            'Authorization': 'Bearer ' + token
        },
        'params': payload
    };
};

const postHeader = token => {
    return {
        'headers': {
            'crossDomain': true,
            'Authorization': 'Bearer ' + token
        }
    };
};

export const get = (path, payload = {}, token = '') => {
    return axios.get(path, getHeader(payload, token))
        .then(res => res.data)
        .catch(err => err);
};

export const post = (path, payload, token = '') => {
    return axios.post(path, payload, postHeader(token))
        .then(res => res.data)
        .catch(err => err);
};
