import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components';

const mountPoint = document.createElement('div');
document.body.appendChild(mountPoint);

ReactDOM.render(<App/>, mountPoint);