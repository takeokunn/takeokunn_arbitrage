import { put, fork, take, call, all, select } from 'redux-saga/effects';

import { coincheck } from 'actions/';
import { COINCHECK } from 'constants/action_type.constant';
import { ajax } from 'services/';

function* handleGetAccountsBalance() {
    while (true) {
        const action = yield take(COINCHECK.GET_ACCOUNTS_BALANCE_REQUEST);
        const response = yield put(ajax.coincheck.getAccountsBalance);
    }
}

function* handleGetLeverageBalance() {
    while (true) {
        const action = yield take(COINCHECK.GET_LEVERAGE_BALANCE_REQUEST);
        const response = yield put(ajax.coincheck.getLeverageBalance);
    }
}

function* handleGetOpenOrders() {
    while (true) {
        const action = yield take(COINCHECK.GET_OPEN_ORDERS_REQUEST);
        const response = yield put(ajax.coincheck.getOpenOrders);
    }
}

function* handleGetLeveragePositions() {
    while (true) {
        const action = yield take(COINCHECK.GET_LEVERAGE_POSITIONS_REQUEST);
        const response = yield put(ajax.coincheck.getLeveragePositions);
    }
}

function* handleGetOrderBooks() {
    while (true) {
        const action = yield take(COINCHECK.GET_ORDER_BOOKS_REQUEST);
        const response = yield put(ajax.coincheck.getOrderBooks);
    }
}

function* handlePostNewOrder() {
    while (true) {
        const action = yield take(COINCHECK.POST_NEW_ORDER_REQUEST);
        const response = yield put(ajax.coincheck.postNewOrder);
    }
}

function* handleDeleteCancelOrder() {
    while (true) {
        const action = yield take(COINCHECK.DELETE_CANCEL_ORDER_REQUEST);
        const response = yield put(ajax.coincheck.deleteCancelOrder);
    }
}

function* handleGetTransactions() {
    while (true) {
        const action = yield take(COINCHECK.GET_TRANSACTIONS_REQUEST);
        const response = yield put(ajax.coincheck.getTransactions);
    }
}

function* coincheckSaga() {
    yield all([
        fork(handleGetAccountsBalance),
        fork(handleGetLeverageBalance),
        fork(handleGetOpenOrders),
        fork(handleGetLeveragePositions),
        fork(handleGetOrderBooks),
        fork(handlePostNewOrder),
        fork(handleDeleteCancelOrder),
        fork(handleGetTransactions),
    ]);
}

export default coincheckSaga;
