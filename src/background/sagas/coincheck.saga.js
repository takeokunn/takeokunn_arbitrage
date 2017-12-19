import { put, fork, take, all } from 'redux-saga/effects';

import { ajax } from 'background_services/';
import { COINCHECK } from 'background_constants/action_type.constant';

function* handleGetAccountsBalance() {
    for (;;) {
        yield take(COINCHECK.GET_ACCOUNTS_BALANCE_REQUEST);
        yield put(ajax.coincheck.getAccountsBalance);
    }
}

function* handleGetLeverageBalance() {
    for (;;) {
        yield take(COINCHECK.GET_LEVERAGE_BALANCE_REQUEST);
        yield put(ajax.coincheck.getLeverageBalance);
    }
}

function* handleGetOpenOrders() {
    for (;;) {
        yield take(COINCHECK.GET_OPEN_ORDERS_REQUEST);
        yield put(ajax.coincheck.getOpenOrders);
    }
}

function* handleGetLeveragePositions() {
    for (;;) {
        yield take(COINCHECK.GET_LEVERAGE_POSITIONS_REQUEST);
        yield put(ajax.coincheck.getLeveragePositions);
    }
}

function* handleGetOrderBooks() {
    for (;;) {
        yield take(COINCHECK.GET_ORDER_BOOKS_REQUEST);
        yield put(ajax.coincheck.getOrderBooks);
    }
}

function* handlePostNewOrder() {
    for (;;) {
        yield take(COINCHECK.POST_NEW_ORDER_REQUEST);
        yield put(ajax.coincheck.postNewOrder);
    }
}

function* handleDeleteCancelOrder() {
    for (;;) {
        yield take(COINCHECK.DELETE_CANCEL_ORDER_REQUEST);
        yield put(ajax.coincheck.deleteCancelOrder);
    }
}

function* handleGetTransactions() {
    for (;;) {
        yield take(COINCHECK.GET_TRANSACTIONS_REQUEST);
        yield put(ajax.coincheck.getTransactions);
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
