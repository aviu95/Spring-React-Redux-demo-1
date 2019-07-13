import * as axios from "axios";
import Store from "../store";
import {flashLoader, stopLoader} from "../actions/loader-action";
import _ from 'lodash';

const initErrorHandling = () => {
    let pendingRequestCount = 0;

    const showSpinner = _.debounce((url) => {
        Store.dispatch(flashLoader());
    }, 100);

    const hideSpinner = () => {
        if(pendingRequestCount === 0) {
            showSpinner.cancel();
            Store.dispatch(stopLoader());
        }
    };

    axios.interceptors.request.use(
        (config) => {
            pendingRequestCount++;
            showSpinner(config.url);
            return config;
        },
        ( error ) => {
            pendingRequestCount--;
            hideSpinner();
            return Promise.reject(error);
        }
    );

    axios.interceptors.response.use(
        (response) => {
            pendingRequestCount--;
            hideSpinner();
            return response;
        },
        (error) => {
            pendingRequestCount--;
            hideSpinner();
            if(error.response.status === 401 || error.response.status === 403) {
                return new Promise(() => {});
            }
            return Promise.reject(error);
        }
    );
};

export { initErrorHandling };
