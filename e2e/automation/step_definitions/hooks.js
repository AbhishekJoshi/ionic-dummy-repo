let {defineSupportCode} = require('cucumber');
defineSupportCode(function({setDefaultTimeout, BeforeAll, Before, After, AfterAll}) {
    setDefaultTimeout(60000);

    Before(function (scenario) {
        helper.switchContext(1);
        generic.skipWelcomeScreen(scenario.pickle.name);
    });

    After(function () {
        search.original_asset_counter = 0;
        search.asset_counter = 0;
        search.subfilter_number = 0;
        search.element_position= 0;
        helper._counter = 0;
        browser.driver.resetApp();
    });
});