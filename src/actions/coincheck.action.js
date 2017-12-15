import { COINCHECK } from 'constants/action_type.constant';

const action = (type, payload = {}) => ({ type, payload });

export const getAccountsBalance = {
    request: () => action(COINCHECK.GET_ACCOUNTS_BALANCE_REQUEST),
    success: () => action(COINCHECK.GET_ACCOUNTS_BALANCE_SUCCESS),
    failure: () => action(COINCHECK.GET_ACCOUNTS_BALANCE_FAILURE)
};

export const getLeverageBalance = {
    request: () => action(COINCHECK.GET_LEVERAGE_BALANCE_REQUEST),
    success: () => action(COINCHECK.GET_LEVERAGE_BALANCE_SUCCESS),
    failure: () => action(COINCHECK.GET_LEVERAGE_BALANCE_FAILURE)
};

export const getOpenOrders = {
    request: () => action(COINCHECK.GET_OPEN_ORDERS_REQUEST),
    success: () => action(COINCHECK.GET_OPEN_ORDERS_SUCCESS),
    failure: () => action(COINCHECK.GET_OPEN_ORDERS_FAILURE)
};

export const getLeveragePositions = {
    request: () => action(COINCHECK.GET_LEVERAGE_POSITIONS_REQUEST),
    success: () => action(COINCHECK.GET_LEVERAGE_POSITIONS_SUCCESS),
    failure: () => action(COINCHECK.GET_LEVERAGE_POSITIONS_FAILURE)
};

export const getOrderBooks = {
    request: () => action(COINCHECK.GET_ORDER_BOOKS_REQUEST),
    success: () => action(COINCHECK.GET_ORDER_BOOKS_SUCCESS),
    failure: () => action(COINCHECK.GET_ORDER_BOOKS_FAILURE)
};

export const postNewOrder = {
    request: () => action(COINCHECK.POST_NEW_ORDER_REQUEST),
    success: () => action(COINCHECK.POST_NEW_ORDER_SUCCESS),
    failure: () => action(COINCHECK.POST_NEW_ORDER_FAILURE)
};

export const deleteCancelOrder = {
    request: () => action(COINCHECK.DELETE_CANCEL_ORDER_REQUEST),
    success: () => action(COINCHECK.DELETE_CANCEL_ORDER_SUCCESS),
    failure: () => action(COINCHECK.DELETE_CANCEL_ORDER_FAILURE)
};

export const getTransactions = {
    request: () => action(COINCHECK.GET_TRANSACTIONS_REQUEST),
    success: () => action(COINCHECK.GET_TRANSACTIONS_SUCCESS),
    failure: () => action(COINCHECK.GET_TRANSACTIONS_FAILURE)
};
