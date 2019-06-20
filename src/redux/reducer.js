import auth from './Modules/auth';
import app from './Modules/app';
import searchCommits from './Modules/searchCommits';

const rootReducres = {
    auth,
    app,
    searchCommits

};

const whitelist = [
    'app',
];

export { rootReducres, whitelist };
