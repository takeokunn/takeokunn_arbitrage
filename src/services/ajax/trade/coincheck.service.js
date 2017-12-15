import axois from 'axois';
import crypto from 'crypto';

import { COINCHECK_CONFIG } from 'config/';

axios.defaults.baseURL = COINCHECK_CONFIG.API_URL;
axios.defaults.headers.post['Content-Type'] = 'application/json';

const getNonce = () => new Date().getTime();

const generateSignature = (nonce, path, payload) => {
    const message = nonce + COINCHECK_CONFIG.API_URL + path + ((Object.keys(payload).length > 0) ? JSON.stringify(payload) : '');
    return crypto.createHmac('sha256', COINCHECK_CONFIG.SECRET_KEY).update(message).digest('hex');
};

const getHeader = (path, payload) => {
    const nonce = getNonce();
    const signature = generateSignature(nonce, path, payload);
    return {
        'headers': {
            'ACCESS-KEY': COINCHECK_CONFIG.ACCESS_KEY,
            'ACCESS-NONCE': nonce,
            'ACCESS-SIGNATURE': signature
        },
        'params': payload
    };
};

const postHeader = (path, payload) => {
    const nonce = getNonce();
    const signature = generateSignature(nonce, path, payload);
    return {
        'headers': {
            'ACCESS-KEY': COINCHECK_CONFIG.ACCESS_KEY,
            'ACCESS-NONCE': nonce,
            'ACCESS-SIGNATURE': signature
        }
    };
};

const deleteHeader = (path, payload) => {
    const nonce = getNonce();
    const signature = generateSignature(nonce, path, payload);
    return {
        'headers': {
            'ACCESS-KEY': COINCHECK_CONFIG.ACCESS_KEY,
            'ACCESS-NONCE': nonce,
            'ACCESS-SIGNATURE': signature
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

const delete = (path, payload) => {
    return axios.delete(path, payload, deleteHeader(path, payload))
        .then(res => res.data)
        .catch(err => err);
};

// exports
export const getAccountsBalance = () => get('/api/accounts/balance');
export const getLeverageBalance = () => get('/api/accounts/leverage_balance');
export const getOpenOrders = () => get('/api/exchange/orders/opens');
export const getLeveragePositions = () => get('/api/exchange/leverage/positions');
export const getOrderBooks = () => get('/api/order_books');
export const postNewOrder = () => post('/api/exchange/orders')
export const deleteCancelOrder = order_id => delete('/api/exchange/orders/${order_id}')
export const getTransactions = () => get('/api/exchange/orders/transactions_pagination');
