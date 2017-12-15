import { combineReducers } from 'redux';

import bitflyer from './bitflyer.reducer';
import coincheck from './coincheck.reducer';
import notification from './notification.reducer';
import zaif from './zaif.reducer';

const reducers = combineReducers({
    bitflyer,
    coincheck,
    notification,
    zaif
});

export default reducers;
