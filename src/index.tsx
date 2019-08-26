import './scss/main.scss';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import store from './store';
import Root from './components/Root/Root';

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
