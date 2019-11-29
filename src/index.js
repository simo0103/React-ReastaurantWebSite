import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import './style/css/index.css';
import * as serviceWorker from './serviceWorker';
if(document.readyState === "complete") {
    console.log("Fully loaded!")
    debugger;
}
else if(document.readyState === "interactive") {
    console.log("DOM ready! Images, frames, and other subresources are still downloading")
}
else {
    // Loading still in progress.
    // To wait for it to complete, add "DOMContentLoaded" or "load" listeners.

    window.addEventListener("DOMContentLoaded", () => {
        console.log("DOM ready! Images, frames, and other subresources are still downloading.222")
    });

    window.addEventListener("load", () => {
        console.log('fully loaded')
    });
}
ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
),document.getElementById('root'));


serviceWorker.unregister();
