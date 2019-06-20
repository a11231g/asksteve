import auth from './Modules/auth';
 import app from './Modules/app';

const rootReducres = {
    auth,
    app,
};

const whitelist = [
    'app',
];

export { rootReducres, whitelist };
