import { BITFLYER } from 'constants/action_type.constant';

const action = (type, payload = {}) => ({ type, payload });

export const postSendChildOrder = {
    request: () => action(BITFLYER.POST_SEND_CHILD_ORDER_REQUEST),
    success: () => action(BITFLYER.POST_SEND_CHILD_ORDER_SUCCESS),
    failure: () => action(BITFLYER.POST_SEND_CHILD_ORDER_FAILURE)
};

export const postCancelChildOrder = {
    request: () => action(BITFLYER.POST_CANCEL_CHILD_ORDER_REQUEST),
    success: () => action(BITFLYER.POST_CANCEL_CHILD_ORDER_SUCCESS),
    failure: () => action(BITFLYER.POST_CANCEL_CHILD_ORDER_FAILURE)
};

export const getChildOrders = {
    request: () => action(BITFLYER.GET_CHILD_ORDERS_REQUEST),
    success: () => action(BITFLYER.GET_CHILD_ORDERS_SUCCESS),
    failure: () => action(BITFLYER.GET_CHILD_ORDERS_FAILURE)
};

export const getExecutions = {
    request: () => action(BITFLYER.GET_EXECUTIONS_REQUEST),
    success: () => action(BITFLYER.GET_EXECUTIONS_SUCCESS),
    failure: () => action(BITFLYER.GET_EXECUTIONS_FAILURE)
};

export const getBalance = {
    request: () => action(BITFLYER.GET_BALANCE_REQUEST),
    success: () => action(BITFLYER.GET_BALANCE_SUCCESS),
    failure: () => action(BITFLYER.GET_BALANCE_FAILURE)
};

export const getBoard = {
    request: () => action(BITFLYER.BITFLYER_GET_BOARD_REQUEST),
    success: () => action(BITFLYER.BITFLYER_GET_BOARD_SUCCESS),
    failure: () => action(BITFLYER.BITFLYER_GET_BOARD_FAILURE)
};
