import { takeLatest, put, call } from 'redux-saga/effects';
import * as actions from '../actions/actionsCreators';

function* requestJobsAsync(action: ActionType) {
  try {
    yield put(actions.requestedJobsListAsync());
    const requestUrl = `https://request-forward.herokuapp.com/jobs.github.com/positions.json?${action.requestUrl}`;
    const jobsList = yield call(async () => {
      const res = await fetch(requestUrl);
      return res.json();
    });
    yield put(actions.requestedJobsListSuccess(jobsList));
  } catch (error) {
    console.log(error);
    yield put(actions.requestedJobsListError());
  }
}

function* watchRequestJobsAsync() {
  yield takeLatest('REQUESTED_JOBS_LIST', requestJobsAsync);
}

export default watchRequestJobsAsync;
