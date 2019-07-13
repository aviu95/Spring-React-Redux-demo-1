import { render } from 'react-dom';
import React from 'react';
import App from './app';
import {Provider} from "react-redux";
import Store from "./store";
import commonStyle from './styles/common.css';
import drawerStyle from './styles/drawer-styles.css';
import {initErrorHandling} from "./interceptor/api-interceptor";

initErrorHandling();

render(
    <Provider store={Store}>
        <App/>
    </Provider>, document.getElementById('app')
);
