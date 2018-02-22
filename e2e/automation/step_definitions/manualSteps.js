let {defineSupportCode} = require('cucumber');
defineSupportCode(function({Given, When, Then}) {

    Given(/^search result for 'cancer' in all supported platforms$/, function (callback) {

        helper.getCallback(callback);
    });

    When(/^I browsing asset categories$/, function (callback) {

        helper.getCallback(callback);
    });

    Then(/^I should be able to search on the currently displayed asset's names$/, function (callback) {

        helper.getCallback(callback);
    });

    Then(/^I should be able to filter result set$/, function (callback) {

        helper.getCallback(callback);
    });

    Then(/^I should see suggestions list related to subject$/, function (callback) {

        helper.getCallback(callback);
    });

    Then(/^I should be able to filter any list$/, function (callback) {

        helper.getCallback(callback);
    });

    Then(/^I see search bar is displayed$/, function (callback) {

        helper.getCallback(callback);
    });

    When(/^I apply every filter in order$/, function (callback) {

        helper.getCallback(callback);
    });

    Then(/^I should see narrowed search where only assets with applied properties left$/, function (callback) {

        helper.getCallback(callback);
    });

    Then(/^the number should always be the same for all platforms$/, function (callback) {

        helper.getCallback(callback);
    });

    Then(/^I should see sharing dialogue$/, function (callback) {
        helper.getCallback(callback);
    });

    Then(/^I should see new email template saying I am going to share "([^"]*)" collection$/, function (callback) {
        helper.getCallback(callback);
    });


    Then(/^I should see new email template saying I am going to share asset$/, function (callback) {
        helper.getCallback(callback);
    });

    Then(/^I should be able to sort assets by Relevance order$/, function (callback) {
        helper.getCallback(callback);
    });

    Then(/^I should see suggestion list related to oncology$/, function (callback) {

        helper.getCallback(callback);
    });

});