import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import $ from 'jquery'

const container = $('#root')[0];
const root = ReactDOM.createRoot(container);

root.render(<App />);
