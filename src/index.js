import rootSaga from 'sagas/';
import store from 'store/';

store.runSaga(rootSaga);

// store.dispatch(notification.postTweet.request('fdasfas'));
