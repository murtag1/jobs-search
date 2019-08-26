import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actionsCreators';
import Loader from '../Loader/Loader';
import JobCreationDate from '../JobCreationDate/JobCreationDate';

interface PropsType {
  jobInfo: JobInfoType;
  location: Location;
  dispatch: DispatchType;
  isRequesting: boolean;
}

function JobDetailsPage(props: PropsType) {
  useEffect(() => {
    const jobId = props.location.pathname.match(/job-info\/(.+)/i);
    if (jobId) props.dispatch(actions.requestedJob(jobId[1]));
  }, [props.location]);

  if (props.isRequesting) {
    return (
      <div className="job-info-page">
        <div className="job-info-page__loader">
          <Loader />
        </div>
      </div>
    );
  }

  if (!props.jobInfo) return null;

  return (
    <div className="job-info-page">
      <div className="job-info-page__inner">
        <div className="job-info-page__header">
          <div className="job-info-page__location">{props.jobInfo.location}</div>
          <div className="job-info-page__type">{props.jobInfo.type}</div>
          <div className="job-info-page__date"><JobCreationDate dateStr={props.jobInfo.created_at}/></div>
          <h1 className="job-info-page__title">{props.jobInfo.title}</h1>
        </div>
        <div className="job-info-page__left">
          <div
            className="job-info-page__description"
            dangerouslySetInnerHTML={{ __html: props.jobInfo.description }}></div>
        </div>
        <div className="job-info-page__right">
          <div className="job-info-page__company">{props.jobInfo.company}</div>
          <img className="job-info-page__company-logo" src={props.jobInfo.company_logo}></img>
          <a className="job-info-page__company-url" href={props.jobInfo.company_url}>{props.jobInfo.company_url}</a>
          <div className="job-info-page__how-to-apply">
            <div className="job-info-page__how-to-apply-title">How to apply</div>
            <div className="job-info-page__how-to-apply-content"
              dangerouslySetInnerHTML={{ __html: props.jobInfo.how_to_apply }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(store: StoreType) {
  return {
    jobInfo: store.jobInfo,
    isRequesting: store.isRequestingJobs,
  };
}

export default connect(mapStateToProps)(JobDetailsPage);
