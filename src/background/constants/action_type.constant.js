export const NOTIFICATION = {
    // post tweet
    POST_TWEET_REQUEST: 'NOTIFICATION_POST_TWEET_REQUEST',
    POST_TWEET_SUCCESS: 'NOTIFICATION_POST_TWEET_SUCCESS',
    POST_TWEET_FAILURE: 'NOTIFICATION_POST_TWEET_FAILURE',

    // post slack
    POST_SLACK_REQUEST: 'NOTIFICATION_POST_SLACK_REQUEST',
    POST_SLACK_SUCCESS: 'NOTIFICATION_POST_SLACK_SUCCESS',
    POST_SLACK_FAILURE: 'NOTIFICATION_POST_SLACK_FAILURE',

    // store notification_log
    STORE_NOTIFICATION_LOG: 'NOTIFICATION_STORE_NOTIFICATION_LOG'
};

export const BITBANK = {
    // set btc_jpy orderbook
    SET_BTC_JPY_ORDERBOOK: 'BITBANK_SET_BTC_JPY_ORDERBOOK',
};

export const BITFLYER = {
    // set btc_jpy orderbook
    SET_BTC_JPY_ORDERBOOK: 'BITFLYER_SET_BTC_JPY_ORDERBOOK',

    // post send child order
    POST_SEND_CHILD_ORDER_REQUEST: 'BITFLYER_POST_SEND_CHILD_ORDER_REQUEST',
    POST_SEND_CHILD_ORDER_SUCCESS: 'BITFLYER_POST_SEND_CHILD_ORDER_SUCCESS',
    POST_SEND_CHILD_ORDER_FAILURE: 'BITFLYER_POST_SEND_CHILD_ORDER_FAILURE',

    // post cancel child order
    POST_CANCEL_CHILD_ORDER_REQUEST: 'BITFLYER_POST_CANCEL_CHILD_ORDER_REQUEST',
    POST_CANCEL_CHILD_ORDER_SUCCESS: 'BITFLYER_POST_CANCEL_CHILD_ORDER_SUCCESS',
    POST_CANCEL_CHILD_ORDER_FAILURE: 'BITFLYER_POST_CANCEL_CHILD_ORDER_FAILURE',

    // get child orders
    GET_CHILD_ORDERS_REQUEST: 'BITFLYER_GET_CHILD_ORDERS_REQUEST',
    GET_CHILD_ORDERS_SUCCESS: 'BITFLYER_GET_CHILD_ORDERS_SUCCESS',
    GET_CHILD_ORDERS_FAILURE: 'BITFLYER_GET_CHILD_ORDERS_FAILURE',

    // get executions
    GET_EXECUTIONS_REQUEST: 'BITFLYER_GET_EXECUTIONS_REQUEST',
    GET_EXECUTIONS_SUCCESS: 'BITFLYER_GET_EXECUTIONS_SUCCESS',
    GET_EXECUTIONS_FAILURE: 'BITFLYER_GET_EXECUTIONS_FAILURE',

    // get balance
    GET_BALANCE_REQUEST: 'BITFLYER_GET_BALANCE_REQUEST',
    GET_BALANCE_SUCCESS: 'BITFLYER_GET_BALANCE_SUCCESS',
    GET_BALANCE_FAILURE: 'BITFLYER_GET_BALANCE_FAILURE',

    // get board
    GET_BOARD_REQUEST: 'BITFLYER_GET_BOARD_REQUEST',
    GET_BOARD_SUCCESS: 'BITFLYER_GET_BOARD_SUCCESS',
    GET_BOARD_FAILURE: 'BITFLYER_GET_BOARD_FAILURE',
};

export const COINCHECK = {
    // set btc_jpy orderbook
    SET_BTC_JPY_ORDERBOOK: 'COINCHECK_SET_BTC_JPY_ORDERBOOK',

    // get accounts balance
    GET_ACCOUNTS_BALANCE_REQUEST: 'COINCHECK_GET_ACCOUNTS_BALANCE_REQUEST',
    GET_ACCOUNTS_BALANCE_SUCCESS: 'COINCHECK_GET_ACCOUNTS_BALANCE_SUCCESS',
    GET_ACCOUNTS_BALANCE_FAILURE: 'COINCHECK_GET_ACCOUNTS_BALANCE_FAILURE',

    // get leverage balance
    GET_LEVERAGE_BALANCE_REQUEST: 'COINCHECK_GET_LEVERAGE_BALANCE_REQUEST',
    GET_LEVERAGE_BALANCE_SUCCESS: 'COINCHECK_GET_LEVERAGE_BALANCE_SUCCESS',
    GET_LEVERAGE_BALANCE_FAILURE: 'COINCHECK_GET_LEVERAGE_BALANCE_FAILURE',

    // get open orders
    GET_OPEN_ORDERS_REQUEST: 'COINCHECK_GET_OPEN_ORDERS_REQUEST',
    GET_OPEN_ORDERS_SUCCESS: 'COINCHECK_GET_OPEN_ORDERS_SUCCESS',
    GET_OPEN_ORDERS_FAILURE: 'COINCHECK_GET_OPEN_ORDERS_FAILURE',

    // get leverage positions
    GET_LEVERAGE_POSITIONS_REQUEST: 'COINCHECK_GET_LEVERAGE_POSITIONS_REQUEST',
    GET_LEVERAGE_POSITIONS_SUCCESS: 'COINCHECK_GET_LEVERAGE_POSITIONS_SUCCESS',
    GET_LEVERAGE_POSITIONS_FAILURE: 'COINCHECK_GET_LEVERAGE_POSITIONS_FAILURE',

    // get order books
    GET_ORDER_BOOKS_REQUEST: 'COINCHECK_GET_ORDER_BOOKS_REQUEST',
    GET_ORDER_BOOKS_SUCCESS: 'COINCHECK_GET_ORDER_BOOKS_SUCCESS',
    GET_ORDER_BOOKS_FAILURE: 'COINCHECK_GET_ORDER_BOOKS_FAILURE',

    // post new order
    POST_NEW_ORDER_REQUEST: 'COINCHECK_POST_NEW_ORDER_REQUEST',
    POST_NEW_ORDER_SUCCESS: 'COINCHECK_POST_NEW_ORDER_SUCCESS',
    POST_NEW_ORDER_FAILURE: 'COINCHECK_POST_NEW_ORDER_FAILURE',

    // delete cancel order
    DELETE_CANCEL_ORDER_REQUEST: 'COINCHECK_DELETE_CANCEL_ORDER_REQUEST',
    DELETE_CANCEL_ORDER_SUCCESS: 'COINCHECK_DELETE_CANCEL_ORDER_SUCCESS',
    DELETE_CANCEL_ORDER_FAILURE: 'COINCHECK_DELETE_CANCEL_ORDER_FAILURE',

    // get transactions
    GET_TRANSACTIONS_REQUEST: 'COINCHECK_GET_TRANSACTIONS_REQUEST',
    GET_TRANSACTIONS_SUCCESS: 'COINCHECK_GET_TRANSACTIONS_SUCCESS',
    GET_TRANSACTIONS_FAILURE: 'COINCHECK_GET_TRANSACTIONS_FAILURE',
};

export const ZAIF = {
    // set btc_jpy orderbook
    SET_BTC_JPY_ORDERBOOK: 'ZAIF_SET_BTC_JPY_ORDERBOOK'
};
