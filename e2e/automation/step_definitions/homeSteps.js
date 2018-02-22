let {defineSupportCode} = require('cucumber');
defineSupportCode(function({Given, When, Then}) {

    Given(/^I am a user at the home page$/, function (callback) {
        generic.tapButton('home');
        generic.elems.syncMessage.waitForElementToBeNotDisplayed();
        helper.getCallback(callback);
    });

    Then(/^I see assets in New solutions$/, function (callback) {

        helper.getCallback(callback);
    });

    When(/^I swipe to "([^"]*)" area$/, function (callback) {

        helper.getCallback(callback);
    });

    When(/^I swipe to "([^"]*)" > "([^"]*)" area$/, function (callback) {

        helper.getCallback(callback);
    });

    When(/^When I scroll to the bottom$/, function (callback) {

        helper.getCallback(callback);
    });

    When(/^I switch to assets list$/, function (callback) {

        helper.getCallback(callback);
    });

    When(/^I will see a list of categories as tabs at the top in the following order Business Unit, Audience, Solution Type, Market, Brand, Therapeutic Area$/, function (callback) {

        helper.getCallback(callback);
    });

    When(/^I click a tab, app provides a list of possible value in alphabetical order$/, function (callback) {

        helper.getCallback(callback);
    });

    When(/^I click on every tab category$/, function (callback) {

        helper.getCallback(callback);
    });

    Then(/^next results are fetched$/, function (callback) {

        helper.getCallback(callback);
    });

    Then(/^I can see a rotating slider of five featured assets$/, function (callback) {

        helper.getCallback(callback);
    });

    Then(/^Each asset displays for five seconds$/, function (callback) {

        helper.getCallback(callback);
    });

    Then(/^I should see only mobile type assets$/, function (callback) {

        helper.getCallback(callback);
    });

    Then(/^I should see unique categories type in each tab$/, function (callback) {

        helper.getCallback(callback);
    });
});