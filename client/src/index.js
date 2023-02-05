import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from "react-dom/client";
import App from './components/App'; 

import {createRoot} from 'react-dom/client';

const left = document.getElementById("left-side");
const handleMove = e => {
left.style.width = `${e.clientX / window.innerWidth * 100}%`;
}
document.onmousemove = e => handleMove(e);
document.ontouchmove = e => handleMove(e.touches[0]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


