import { ZAIF }  from 'constants/action_type.constant';

const initialZaifState = {
    isFetching: false,
    btc_jpy_orderbook: []
};

const zaif = (state = initialZaifState, action) => {
    switch (action.type) {
        // set btc_jpy orderbook
        case ZAIF.SET_BTC_JPY_ORDERBOOK:
            return { ...state, btc_jpy_orderbook: action.data };
        default:
            return { ...state };
    }
};

export default zaif;
