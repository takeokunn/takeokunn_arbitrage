import rootSaga from 'background_sagas/';
import store from 'background_store/';

import { notification } from 'background_actions/';

store.runSaga(rootSaga);
store.dispatch(notification.postTweet.request('fdsafa'));
