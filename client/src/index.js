import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store ={store}>
    <BrowswerRouter>
      <App />
    </BrowswerRouter>
  </Provider>, 
document.getElementById('root'));
registerServiceWorker();
