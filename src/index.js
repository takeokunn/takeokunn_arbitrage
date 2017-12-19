import rootSaga from 'sagas/';
import store from 'store/';

import { notification } from 'actions/';

store.runSaga(rootSaga);
