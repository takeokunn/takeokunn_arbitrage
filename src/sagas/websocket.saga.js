import WebSocket from 'ws';
import PubNub from 'pubnub';
import { eventChannel } from 'redux-saga'
import { put, fork, take, call, all } from 'redux-saga/effects';

import { BITFLYER_CONFIG, COINCHECK_CONFIG, ZAIF_CONFIG } from 'config/';
import { COINCHECK, ZAIF }  from 'constants/action_type.constant';

const bitflyerInitChannel = () => {
    return eventChannel(emitter => {
        const pubnub = new PubNub({ subscribeKey: BITFLYER_CONFIG.SUBSCRIBE_KEY });
        pubnub.addListener({ message: data => emitter({ type: BITFLYER.SET_BTC_JPY_ORDERBOOK, data: data.message }) });
        pubnub.subscribe({ channels: [BITFLYER_CONFIG.BTC_JPY_CHANNEL] });
        return () => console.log("socket off");
    });
};

const coincheckInitChannel = () => {
    return eventChannel(emitter => {
        const socket = new WebSocket(COINCHECK_CONFIG.WEBSOCKET_URL);
        socket.on('open', () => socket.send(JSON.stringify({type: "subscribe", channel: "btc_jpy-orderbook"})));
        socket.on('message', data => emitter({ type: COINCHECK.SET_BTC_JPY_ORDERBOOK, data }));
        return () => console.log("socket off");
    });
};

const zaifInitChannel = () => {
    return eventChannel(emitter => {
        const socket = new WebSocket(ZAIF_CONFIG.WEBSOCKET_BTC_JPY_URL);
        socket.on('message', data => emitter({ type: ZAIF.SET_BTC_JPY_ORDERBOOK, data }));
        return () => console.log("socket off");
    });
};

function* handleBitflyerStream() {
    const channel = yield call(bitflyerInitChannel);
    while (true) {
        const action = yield take(channel);
        yield put(action);
    }
}

function* handleCoincheckStream() {
    const channel = yield call(coincheckInitChannel);
    while (true) {
        const action = yield take(channel);
        yield put(action);
    }
}

function* handleZaifStream() {
    const channel = yield call(zaifInitChannel);
    while (true) {
        const action = yield take(channel);
        yield put(action);
    }
}

function* websocketSaga() {
    yield all([
        fork(handleBitflyerStream),
        fork(handleCoincheckStream),
        fork(handleZaifStream),
    ]);
}

export default websocketSaga;
