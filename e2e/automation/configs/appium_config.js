const argv = require('yargs').argv;
const report = require('cucumber-html-reporter');

config = {
    // define a feature to execute or run all by setting '*.feature' key
    specs: ['../test_features/collection.feature'],
    seleniumAddress: 'http://localhost:4723/wd/hub',
    framework: 'custom',
    ignoreUncaughtExceptions: true,
    frameworkPath: require.resolve('../node_modules/protractor-cucumber-framework'),

    capabilities: {
        // Test app has to be built in XCode and signed with Pfizer profile, copy paste app path here
        app: '/Users/user/Library/Developer/Xcode/DerivedData/DASH-bfeifhzbkdllmvfwopgazxjjwnja/Build/Products/Debug-iphonesimulator/example.app',
        appiumVersion: '1.7.1',
        platformName: 'iOS',
        platformVersion: '11.2',
        deviceName: 'iPhone 6',
        appVersion: '1.0.6',
        browserName: '',
        // full data reset on device/simulator before each test.
        fullReset: false,
        // reinstall the app after each test. Not recommended to change since tests rely on clean app state.
        noReset: false,
        autoGrantPermissions:true,
        clearSystemFiles: true,
        autoAcceptAlerts: true,
        xcodeOrgId: '3EAJZ2TE26',
        xcodeSigningId: 'iPhone Developer',
        showXcodeLog: true
    },
    onPrepare: function () {
        require('./init');
        helper.setAppVersion();
        browser.params.mobile = true;
        browser.params.iOS = true;
        browser.ignoreSynchronization = true;
    },
    onCleanUp: function () {
        let options = {
            theme: 'bootstrap',
            jsonFile: './reports/report.json',
            output: './reports/report.html',
            reportSuiteAsScenarios: true,
            launchReport: true,
            metadata: {
                'App Version': helper._appVersion,
                'Test Environment': 'Local'
            }
        };
        report.generate(options);
    },
    cucumberOpts: {
        require: '../step_definitions/*.js',
        tags: false,
        profile: false,
        'no-source': true,
        format:'json:./reports/report.json'
    }
};

exports.config = config;