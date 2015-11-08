/// <reference path="./dependencies.d.ts" />

import application = require('application');
application.mainModule = './views/list/list';

// Remove this in the AppBuilder templates
application.cssFile = './app.css';

application.start();
