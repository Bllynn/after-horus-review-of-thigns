import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import router from './router';
import registerServiceWorker from './registerServiceWorker';

import './App.css'//dont forget to import your CSS here.

ReactDOM.render(router, document.getElementById('root'));//ROUTER IS IMPORTED HERE AS router .  THIS IS INSTEAD OF WRAPPING APP IN <HASHROUTER>
registerServiceWorker();
