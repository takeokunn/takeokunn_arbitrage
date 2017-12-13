import sagas from 'sagas/';
import configureStore from 'store/';

import { notification } from 'actions/';

const store = configureStore();
store.runSaga(sagas);

store.dispatch(notification.postTweet.request('good'))
