let {defineSupportCode} = require('cucumber');
defineSupportCode(function({Given, When, Then}) {

    Given(/^I am a user who runs app for the first time and sees Welcome screen$/, function (callback) {
        generic.isWelcomeScreenDisplayed();
        helper.getCallback(callback);
    });

    Given(/^I am viewing an asset$/, function (callback) {
        helper.getCallback(callback);
    });

    Given(/^I am viewing a web asset$/, function (callback) {
        helper.getCallback(callback);
    });

    Given(/^I am a new user and open the app for the first time$/, function (callback) {
        helper.getCallback(callback);
    });

    When(/^I scroll and check each each frame image, title and description$/, function (callback) {
        generic.processWelcomeScreen();
        helper.getCallback(callback);
    });

    When(/^I tap "([^"]*)" button$/, function (arg, callback) {
        generic.tapButton(arg);
        helper.getCallback(callback);
    });

    When(/^I click "([^"]*)" category$/, function (callback) {
        helper.getCallback(callback);
    });

    When(/^I enter into asset$/, function (callback) {
        helper.getCallback(callback);
    });

    Then(/^I should see 'Get Started' button$/, function (callback) {

        helper.getCallback(callback);
    });

    Then(/^I should be able to sort assets by alphabetical and Publish date order$/, function (callback) {
        helper.getCallback(callback);
    });

    Then(/^I should see that filter becomes first in filter line next to Clear button$/, function (callback) {
        helper.getCallback(callback);
    });

    Then(/^I should see a message that data is syncing$/, function (callback) {
        helper.getCallback(callback);
    });

    Then(/^"([^"]*)" button should appear$/, function (arg, callback) {
        generic.isButtonPresent(search.elems.firstFilter, arg);
        helper.getCallback(callback);
    });

    Then(/^I should see app description, 'Send Feedback button', 'Report Bug' button, app version$/, function (callback) {
        about.checkDescription();
        about.checkButtons();
        about.checkVersion();
        helper.getCallback(callback);
    });
});