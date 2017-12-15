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
        // post send child order
        case BITFLYER.POST_SEND_CHILD_ORDER_REQUEST:
        case BITFLYER.POST_SEND_CHILD_ORDER_SUCCESS:
        case BITFLYER.POST_SEND_CHILD_ORDER_FAILURE:
            return { ...state, isFetching: true };
        // post cancel child order
        case BITFLYER.POST_CANCEL_CHILD_ORDER_REQUEST:
        case BITFLYER.POST_CANCEL_CHILD_ORDER_SUCCESS:
        case BITFLYER.POST_CANCEL_CHILD_ORDER_FAILURE:
            return { ...state, isFetching: true };
        // get child orders
        case BITFLYER.GET_CHILD_ORDERS_REQUEST:
        case BITFLYER.GET_CHILD_ORDERS_SUCCESS:
        case BITFLYER.GET_CHILD_ORDERS_FAILURE:
            return { ...state, isFetching: true };
        // get executions
        case BITFLYER.GET_EXECUTIONS_REQUEST:
        case BITFLYER.GET_EXECUTIONS_SUCCESS:
        case BITFLYER.GET_EXECUTIONS_FAILURE:
            return { ...state, isFetching: true };
        // get executions
        case BITFLYER.GET_EXECUTIONS_REQUEST:
        case BITFLYER.GET_EXECUTIONS_SUCCESS:
        case BITFLYER.GET_EXECUTIONS_FAILURE:
            return { ...state, isFetching: true };
        // get balance
        case BITFLYER.GET_BALANCE_REQUEST:
        case BITFLYER.GET_BALANCE_SUCCESS:
        case BITFLYER.GET_BALANCE_FAILURE:
            return { ...state, isFetching: true };
        // get board
        case BITFLYER.GET_BOARD_REQUEST:
        case BITFLYER.GET_BOARD_SUCCESS:
        case BITFLYER.GET_BOARD_FAILURE:
            return { ...state, isFetching: true };
        default:
            return { ...state };
    }
};

export default bitflyer;
