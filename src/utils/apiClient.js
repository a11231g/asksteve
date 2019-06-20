import { apiPath } from '../config';

const methods = ['get', 'post', 'put', 'patch', 'delete'];

export function formatUrl(path) {
    const adjustedPath = path[0] !== '/' ? `/${path}` : path;
    return apiPath + adjustedPath;
}

export function checkStatus(response) {
    if (response.status === 201) {
        return response;
    }
    if (response.status >= 200 && response.status < 300) {
        if (response._bodyInit) {
            return response.json();
        }
        return response;
    }
    if (response.status === 401) {
        return Promise.reject(response);
    }

    return Promise.reject(response);
}

export function parseJSON(response) {
    if (response && response.headers) {
        return response.headers.get('Content-Type') === 'application/json' ? response.json() : response;
    }
    return response;
}

function fetchCreator(method, url, options = {}) {
    options.method = method;

    return this.request(url, options)
        .then(checkStatus)
        .then(parseJSON);
}

export default class ApiClient {
    constructor() {
        methods.forEach((method) => {
            this[method] = fetchCreator.bind(this, method);
        });
    }

    request(url, { data, ...options } = {}) {

        const fetchOptions = options;
        fetchOptions.headers = fetchOptions.headers || {};

        fetchOptions.body = JSON.stringify(data);
        fetchOptions.headers.Accept = "application/json";
        fetchOptions.headers["Content-Type"] = "application/json";


        if (this.jwt) {
            fetchOptions.headers.Authorization = this.jwt;
        }
        console.log(formatUrl(url));
        console.log(fetchOptions);
        return fetch(formatUrl(url), fetchOptions);
    }
}
