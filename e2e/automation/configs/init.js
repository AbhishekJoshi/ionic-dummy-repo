global.expect = require('chai')
    .use(require('chai-as-promised'))
    .use(require('chai-string'))
    .expect;

global.step = browser.controlFlow();
global.framework = require('../framework');
global.helper = framework.helper;
global.sharedData = require('../step_definitions/test_data/sharedData');
global.collection = require('../step_definitions/pages/collectionPage');
global.about = require('../step_definitions/pages/aboutPage');
global.generic = require('../step_definitions/pages/genericPage');
global.home = require('../step_definitions/pages/homePage');
global.search = require('../step_definitions/pages/searchPage');