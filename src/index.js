import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./app";
import "./index.scss";

const root = ReactDOM.createRoot(document.querySelector('.wrapper'));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);