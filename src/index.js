import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import Store from './Redux/Store/Index';

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider  store={Store}>
        <App />
    </Provider>
);
reportWebVitals();
