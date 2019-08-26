import actionsTypes from './actions/actionsTypes';

const initialState: StoreType = {
  isRequestingJobs: false,
  jobsInfoList: [],
  jobInfo: null,
};

function reducer(state = initialState, action: ActionType): StoreType {
  switch (action.type) {
    case actionsTypes.REQUESTED_JOBS_LIST_ASYNC:
      return Object.assign({}, state, { isRequestingJobs: true });
    case actionsTypes.REQUESTED_JOBS_LIST_SUCCESS:
      return Object.assign({}, state, {
        isRequestingJobs: false,
        jobsInfoList: action.jobsInfoList,
      });
    case actionsTypes.REQUESTED_JOBS_LIST_ERROR:
      return Object.assign({}, state, { isRequestingJobs: false });

    case actionsTypes.REQUESTED_JOB_ASYNC:
      return Object.assign({}, state, { isRequestingJobs: true });
    case actionsTypes.REQUESTED_JOB_SUCCESS:
      return Object.assign({}, state, { jobInfo: action.jobInfo, isRequestingJobs: false });
    case actionsTypes.REQUESTED_JOB_ERROR:
      return Object.assign({}, state, { isRequestingJobs: false });
    default:
      return state;
  }
}

export default reducer;
