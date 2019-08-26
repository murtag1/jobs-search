import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Store } from 'redux';
import FilterPage from '../FilterPage/FilterPage';
import JobDetailsPage from '../JobDetailsPage/JobDetailsPage';

interface PropsType {
  store: Store;
}

function Root(props: PropsType) {
  return (
    <Provider store={props.store} >
      <BrowserRouter >
        <Switch>
          <Route path="/job-info" component={JobDetailsPage} />
          <Route strict path="/" component={FilterPage} />
        </Switch>
      </BrowserRouter>
    </Provider >
  );
}

export default Root;
