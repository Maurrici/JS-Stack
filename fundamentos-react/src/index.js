import './index.css';
import ReactDom from 'react-dom';
import React from 'react';

import App from './App';

ReactDom.render(
    <div>
        <App></App>
    </div>, 
    document.querySelector("#root")
);