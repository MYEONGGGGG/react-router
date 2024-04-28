// 최신 버전, React 18 버전 이후(createRoot)
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import './index.css';
import reportWebVitals from "./reportWebVitals";

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);


// React 17 버전까지 이용 가능(ReactDOM.render)
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from "./reportWebVitals";
//
// ReactDOM.render(
//     <BrowserRouter>
//         <App/>
//     </BrowserRouter>,
//     document.getElementById("root")
// );

// react 애플리케이션의 성능을 측정하고 감시하는 역할
reportWebVitals();