import React from 'react';
import { Link } from 'react-router-dom';
import JobCreationDate from '../JobCreationDate/JobCreationDate';

interface PropsType {
  title: string;
  location: string;
  type: string;
  company: string;
  id: string;
  creationDate: string;
}

function JobsInfoItem(props: PropsType) {
  return (
    <Link
      className="jobs-info-item"
      to={`/job-info/${props.id}`}>
      <div className="jobs-info-item__left">
        <div className="jobs-info-item__title">{props.title}</div>
        <div>
          <div className="jobs-info-item__company">{props.company}</div>
          <div className="jobs-info-item__type">{props.type}</div>
        </div>
      </div>
      <div className="jobs-info-item__right">
        <div className="jobs-info-item__location">{props.location}</div>
        <div className="jobs-info-item__creation-date">
          <JobCreationDate dateStr={props.creationDate}/>
        </div>
      </div>
    </Link>
  );
}

export default JobsInfoItem;
