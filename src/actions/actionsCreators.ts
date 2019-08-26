import actionsTypes from './actionsTypes';

export function requestedJobsList(requestUrl: string) {
  return {
    type: actionsTypes.REQUESTED_JOBS_LIST,
    requestUrl,
  };
}

export function requestedJobsListAsync() {
  return {
    type: actionsTypes.REQUESTED_JOBS_LIST_ASYNC,
  };
}

export function requestedJobsListSuccess(jobsInfoList: JobInfoType[]) {
  return {
    type: actionsTypes.REQUESTED_JOBS_LIST_SUCCESS,
    jobsInfoList,
  };
}

export function requestedJobsListError() {
  return {
    type: actionsTypes.REQUESTED_JOBS_LIST_ERROR,
  };
}

export function requestedJob(id: string) {
  return {
    type: actionsTypes.REQUESTED_JOB,
    jobId: id,
  };
}

export function requestedJobAsync() {
  return {
    type: actionsTypes.REQUESTED_JOB_ASYNC,
  };
}

export function requestedJobSuccess(jobInfo: JobInfoType) {
  return {
    type: actionsTypes.REQUESTED_JOB_SUCCESS,
    jobInfo,
  };
}

export function requestedJobError() {
  return {
    type: actionsTypes.REQUESTED_JOB_ERROR,
  };
}
