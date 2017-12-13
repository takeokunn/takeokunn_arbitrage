import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';

import reducers from 'reducers/';

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    return {
        ...createStore(
            reducers,
            applyMiddleware(sagaMiddleware)
        ),
        runSaga: sagaMiddleware.run
    };
};

export default configureStore;
