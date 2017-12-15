import axois from 'axois';
import crypto from 'crypto';

import { BITFLYER_CONFIG } from 'config/';

axios.defaults.baseURL = BITFLYER_CONFIG.API_URL;
axios.defaults.headers.post['Content-Type'] = 'application/json';

const getNonce = () => new Date().getTime();

const generateSignature = (nonce, path, payload) => {
    const message = nonce + BITFLYER_CONFIG.API_URL + path + ((Object.keys(payload).length > 0) ? JSON.stringify(payload) : '');
    return crypto.createHmac('sha256', BITFLYER_CONFIG.SECRET_KEY).update(message).digest('hex');
};

const getHeader = (path, payload) => {
    const nonce = getNonce();
    const signature = generateSignature(nonce, path, payload);
    return {
        'headers': {
            'ACCESS-KEY': BITFLYER_CONFIG.ACCESS_KEY,
            'ACCESS-TIMESTAMP': nonce,
            'ACCESS-SIGN': signature
        },
        'params': payload
    };
};

const postHeader = (path, payload) => {
    const nonce = getNonce();
    const signature = generateSignature(nonce, path, payload);
    return {
        'headers': {
            'ACCESS-KEY': BITFLYER_CONFIG.ACCESS_KEY,
            'ACCESS-TIMESTAMP': nonce,
            'ACCESS-SIGN': signature
        }
    };
};

const get = (path, payload) => {
    return axios.get(path, getHeader(path, payload))
        .then(res => res.data)
        .catch(err => err);
};

const post = (path, payload) => {
    return axios.post(path, payload, postHeader(path, payload))
        .then(res => res.data)
        .catch(err => err);
};

// exports
export const postSendChildOrder = () => post('/me/sendchildorder');
export const postCancelChildOrder = () => post('/me/cancelchildorder');
export const getChildOrders = () => get('/me/getchildorders');
export const getExecutions = () => get('/me/getexecutions');
export const getBalance = () => get('/me/getbalance');
export const getBoard = () => get('/board');
