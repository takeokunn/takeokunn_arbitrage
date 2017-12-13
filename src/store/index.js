import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';

import reducers from 'reducers/';

const sagaMiddleware = createSagaMiddleware();

const store = {
    ...createStore(
        reducers,
        applyMiddleware(sagaMiddleware)
    ),
    runSaga: sagaMiddleware.run
};

export default store;
