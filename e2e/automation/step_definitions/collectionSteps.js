let {defineSupportCode} = require('cucumber');
defineSupportCode(function({Given, When, Then}) {

    Given(/^I am user on Collections tab$/, function (callback) {
        helper.getCallback(callback);
    });

    Given(/^I'm viewing a collection$/, function (callback) {
        generic.tapButton('collections');
        collection.openFavoritesCollection();
        helper.getCallback(callback);
    });

    Given(/^I am user on Collections tab and have at least one collection$/, function (callback) {
        generic.tapButton('collections');
        helper.getCallback(callback);
    });

    When(/^I enter into collection$/, function (callback) {
        helper.getCallback(callback);
    });

    When(/^I choose "([^"]*)" collection$/, function (collectionName, callback) {
        helper.getCallback(callback);
    });

    When(/^I fill required fields as title: "([^"]*)" and description: "([^"]*)" and click "([^"]*)" button$/, function
        (title, description, action, callback) {
        collection.fillAndConfirmCollection(title, description, action);
        helper.getCallback(callback);
    });

    When(/^confirm I'd like to remove an asset from my collection$/, function (callback) {
        helper.getCallback(callback);
    });

    When(/^I click on the collection description$/, function (callback) {
        collection.editProperties();
        helper.getCallback(callback);
    });

    Then(/^asset should appear in "([^"]*)" collection$/, function (assetTitle, callback) {
        helper.getCallback(callback);
    });

    Then(/^collection is deleted$/, function (callback) {
        collection.isCollectionDeleted();
        helper.getCallback(callback);
    });

    Then(/^‘Add to collection’ pop up with confirmation and Collection title and description fields appears$/, function
        (callback) {
        collection.prepareNewCollection();
        helper.getCallback(callback);
    });

    Then(/^I should see collection with title "([^"]*)" and description "([^"]*)" with exact number of assets in it$/, function
        (title, description, callback) {
        collection.checkCollection(title, description);
        helper.getCallback(callback);
    });

    Then(/^I should see collection with title "([^"]*)" and "([^"]*)" assets in it$/, function
        (title, assetNumber, callback) {
        collection.checkCollection(title, assetNumber, true);
        helper.getCallback(callback);
    });

    Then(/^I should see a remove icon for each asset$/, function (callback) {
        helper.getCallback(callback);
    });

    Then(/^asset "([^"]*)" is removed$/, function (callback) {
        helper.getCallback(callback);
      //  callback(null, 'pending');
    });
});