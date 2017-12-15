import { put, fork, take, call, all, select } from 'redux-saga/effects';

import { bitflyer } from 'actions/';
import { BITFLYER } from 'constants/action_type.constant';
import { ajax } from 'services/';

function* handlePostSendChildOrder() {
    while (true) {
        const action = yield take(BITFLYER.POST_SEND_CHILD_ORDER_REQUEST);
        const response = yield put(ajax.bitflyer.postSendChildOrder);
    }
}

function* handlePostCancelChildOrder() {
    while (true) {
        const action = yield take(BITFLYER.POST_CANCEL_CHILD_ORDER_REQUEST);
        const response = yield put(ajax.bitflyer.postCancelChildOrder);
    }
}

function* handleGetChildOrders() {
    while (true) {
        const action = yield take(BITFLYER.GET_CHILD_ORDERS_REQUEST);
        const response = yield put(ajax.bitflyer.getChildOrders);
    }
}

function* handleGetExecutions() {
    while (true) {
        const action = yield take(BITFLYER.GET_EXECUTIONS_REQUEST);
        const response = yield put(ajax.bitflyer.getExecutions);
    }
}

function* handleGetBalance() {
    while (true) {
        const action = yield take(BITFLYER.GET_BALANCE_REQUEST);
        const response = yield put(ajax.bitflyer.getBalance);
    }
}

function* handleGetBoard() {
    while (true) {
        const action = yield take(BITFLYER.GET_BOARD_REQUEST);
        const response = yield put(ajax.bitflyer.getBoard);
    }
}

function* bitflyerSaga() {
    yield all([
        fork(handlePostSendChildOrder),
        fork(handlePostCancelChildOrder),
        fork(handleGetChildOrders),
        fork(handleGetExecutions),
        fork(handleGetBalance),
        fork(handleGetBoard)
    ]);
}

export default bitflyerSaga;
