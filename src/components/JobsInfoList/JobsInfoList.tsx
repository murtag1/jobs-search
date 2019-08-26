import React from 'react';
import { connect } from 'react-redux';
import JobsInfoItem from '../JobsInfoItem/JobsInfoItem';
import Loader from '../Loader/Loader';

interface PropsType {
  jobsInfoList: JobInfoType[];
  isRequesting: boolean;
}

function JobsInfoList(props: PropsType) {
  if (props.isRequesting) {
    return (
      <div className="jobs-info-list">
        <Loader />
      </div>
    );
  }

  return (
    <div className="jobs-info-list">
      {props.jobsInfoList.map((jobInfo: JobInfoType) => (
        <JobsInfoItem
          key={jobInfo.id}
          id={jobInfo.id}
          title={jobInfo.title}
          type={jobInfo.type}
          location={jobInfo.location}
          company={jobInfo.company}
          creationDate={jobInfo.created_at}
        />
      ))}
    </div>
  );
}

function mapStateToProps(store: StoreType) {
  return {
    jobsInfoList: store.jobsInfoList,
    isRequesting: store.isRequestingJobs,
  };
}

export default connect(mapStateToProps)(JobsInfoList);
