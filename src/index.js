import rootSaga from 'sagas/';
import store from 'store/';

import { ajax, mongo, logger } from 'services/';
import { notification } from 'actions/';

logger.error("エラーだよー");

// store.runSaga(rootSaga);
//
// store.dispatch(notification.postTweet.request('fdasfas'));
