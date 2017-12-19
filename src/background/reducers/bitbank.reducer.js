import { BITBANK }  from 'background_constants/action_type.constant';

const initialBitbankState = {
    isFetching: false,
    btc_jpy_orderbook: []
};

const bitbank = (state = initialBitbankState, action) => {
    switch (action.type) {
    // set btc_jpy orderbook
    case BITBANK.SET_BTC_JPY_ORDERBOOK:
        return { ...state, btc_jpy_orderbook: action.data };
    default:
        return { ...state };
    }
};

export default bitbank;
