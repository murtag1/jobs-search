import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actionsCreators';
import JobsFilter from '../JobsFilter/JobsFilter';
import JobsInfoList from '../JobsInfoList/JobsInfoList';

interface PropsType {
  location: Location;
  dispatch: DispatchType;
  history: History;
}

function FilterPage(props: PropsType) {
  useEffect(() => {
    const path = props.location.pathname;
    if (path === '/') return;
    props.dispatch(actions.requestedJobsList(path.slice(1, path.length)));
  }, [props.location]);

  return (
    <div className="filter-page">
      <div className="filter-page__inner">
        <div className="filter-page__left">
          <JobsFilter path={props.location.pathname} history={props.history}/>
        </div>
        <div className="filter-page__right">
          <JobsInfoList />
        </div>
      </div>
    </div>
  );
}


function mapDispatchToProps(dispatch: DispatchType) {
  return {
    dispatch,
  };
}

export default connect(undefined, mapDispatchToProps)(FilterPage);
