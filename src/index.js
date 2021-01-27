import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = () => {
    return <div className="title">Rollup-React template for building moduled app</div>;
};

export const render = roorElement => {
    return ReactDOM.render(<App />, roorElement);
};