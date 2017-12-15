import { BITFLYER }  from 'constants/action_type.constant';

const initialBitflyerState = {
    isFetching: false,
    btc_jpy_orderbook: []
};

const bitflyer = (state = initialBitflyerState, action) => {
    switch (action.type) {
        // set btc_jpy orderbook
        case BITFLYER.SET_BTC_JPY_ORDERBOOK:
            return { ...state, btc_jpy_orderbook: action.data };
        default:
            return { ...state };
    }
};

export default bitflyer;
