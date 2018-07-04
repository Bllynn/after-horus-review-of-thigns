import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import router from './router';
import registerServiceWorker from './registerServiceWorker';

import './App.css'

ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();
