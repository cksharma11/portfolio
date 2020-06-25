import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import Home from './components/Home/Home';

ReactDOM.render(<Home />, document.getElementById('root'));

serviceWorker.unregister();
