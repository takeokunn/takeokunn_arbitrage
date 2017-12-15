import rootSaga from 'sagas/';
import store from 'store/';

import { logger } from 'services/';
import { notification } from 'actions/';

store.runSaga(rootSaga);

// store.dispatch(notification.postTweet.request('fdasfas'));
