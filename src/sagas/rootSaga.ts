import { all } from 'redux-saga/effects';
import watchRequestJobsListAsync from './requestJobsList';
import watchRequestJobAsync from './requestJob';

function* rootSaga() {
  yield all([
    watchRequestJobsListAsync(),
    watchRequestJobAsync(),
  ]);
}

export default rootSaga;
