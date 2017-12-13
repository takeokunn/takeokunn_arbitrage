import { combineReducers } from 'redux';

import notification from './notification.reducer';

const reducers = combineReducers({
    notification
});

export default reducers;
