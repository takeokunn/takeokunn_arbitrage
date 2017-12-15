import { COINCHECK }  from 'constants/action_type.constant';

const initialCoincheckState = {
    isFetching: false,
    btc_jpy_orderbook: []
};

const coincheck = (state = initialCoincheckState, action) => {
    switch (action.type) {
        // set btc_jpy orderbook
        case COINCHECK.SET_BTC_JPY_ORDERBOOK:
            return { ...state, btc_jpy_orderbook: action.data };
        // get accounts balance
        case COINCHECK.GET_ACCOUNTS_BALANCE_REQUEST:
        case COINCHECK.GET_ACCOUNTS_BALANCE_SUCCESS:
        case COINCHECK.GET_ACCOUNTS_BALANCE_FAILURE:
            return { ...state, isFetching: true };
        // get leverage balance
        case COINCHECK.GET_LEVERAGE_BALANCE_REQUEST:
        case COINCHECK.GET_LEVERAGE_BALANCE_SUCCESS:
        case COINCHECK.GET_LEVERAGE_BALANCE_FAILURE:
            return { ...state, isFetching: true };
        // get open orders
        case COINCHECK.GET_OPEN_ORDERS_REQUEST:
        case COINCHECK.GET_OPEN_ORDERS_SUCCESS:
        case COINCHECK.GET_OPEN_ORDERS_FAILURE:
            return { ...state, isFetching: true };
        // get leverage positions
        case COINCHECK.GET_LEVERAGE_POSITIONS_REQUEST:
        case COINCHECK.GET_LEVERAGE_POSITIONS_SUCCESS:
        case COINCHECK.GET_LEVERAGE_POSITIONS_FAILURE:
            return { ...state, isFetching: true };
        // get order books
        case COINCHECK.GET_ORDER_BOOKS_REQUEST:
        case COINCHECK.GET_ORDER_BOOKS_SUCCESS:
        case COINCHECK.GET_ORDER_BOOKS_FAILURE:
            return { ...state, isFetching: true };
        // post new order
        case COINCHECK.POST_NEW_ORDER_REQUEST:
        case COINCHECK.POST_NEW_ORDER_SUCCESS:
        case COINCHECK.POST_NEW_ORDER_FAILURE:
            return { ...state, isFetching: true };
        // delete cancel order
        case COINCHECK.DELETE_CANCEL_ORDER_REQUEST:
        case COINCHECK.DELETE_CANCEL_ORDER_SUCCESS:
        case COINCHECK.DELETE_CANCEL_ORDER_FAILURE:
            return { ...state, isFetching: true };
        // get transactions
        case COINCHECK.GET_TRANSACTIONS_REQUEST:
        case COINCHECK.GET_TRANSACTIONS_SUCCESS:
        case COINCHECK.GET_TRANSACTIONS_FAILURE:
            return { ...state, isFetching: true };
        default:
            return { ...state };
    }
};

export default coincheck;
