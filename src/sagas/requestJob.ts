import { takeLatest, put, call } from 'redux-saga/effects';
import * as actions from '../actions/actionsCreators';

function* requestJobAsync(action: ActionType) {
  try {
    yield put(actions.requestedJobAsync());
    const requestUrl = `https://request-forward.herokuapp.com/jobs.github.com/positions/${action.jobId}.json`;
    const jobsList = yield call(async () => {
      const res = await fetch(requestUrl);
      return res.json();
    });
    yield put(actions.requestedJobSuccess(jobsList));
  } catch (error) {
    console.log(error);
    yield put(actions.requestedJobError());
  }
}

function* watchRequestJobsAsync() {
  yield takeLatest('REQUESTED_JOB', requestJobAsync);
}

export default watchRequestJobsAsync;
