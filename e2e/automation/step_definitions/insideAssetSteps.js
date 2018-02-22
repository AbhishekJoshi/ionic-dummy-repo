let {defineSupportCode} = require('cucumber');
defineSupportCode(function({Given, When, Then}) {

    Then(/^asset View page should have Screen shot of Asset$/, function (callback) {
        helper.getCallback(callback);
    });

    Then(/^download App button should be displayed$/, function (callback) {
        helper.getCallback(callback);
    });

    Then(/^link to web asset should be displayed$/, function (callback) {
        helper.getCallback(callback);
    });

    Then(/^disabled Download App button if no url for asset is available$/, function (callback) {
        helper.getCallback(callback);
    });

    Then(/^description of asset$/, function (callback) {
        helper.getCallback(callback);
    });

    Then(/^information attributes for asset - show first three, with the remainder collapsed behind a hide-show link$/, function (callback) {
        helper.getCallback(callback);
    });

    Then(/^contacts for asset - Business Owner, SC Owner, BP$/, function (callback) {
        helper.getCallback(callback);
    });

    Then(/^able to email contacts$/, function (callback) {
        helper.getCallback(callback);
    });

    Then(/^contacts without email addresses will have email button disabled$/, function (callback) {
        helper.getCallback(callback);
    });

    Then(/^long asset descriptions will be truncated with a link to show-hide the entire description$/, function (callback) {
        helper.getCallback(callback);
    });

    Then(/^able to open OrgChart App record for asset product owners$/, function (callback) {
        helper.getCallback(callback);
    });

    Then(/^edit button to edit asset should be displayed$/, function (callback) {
        helper.getCallback(callback);
    });

    Then(/^able to share a deep link of the asset$/, function (callback) {
        helper.getCallback(callback);
    });

    Then(/^able to add asset to collection$/, function (callback) {
        helper.getCallback(callback);
    });

    Then(/^a list of tags at the bottom of the Asset View page should be displayed$/, function (callback) {
        helper.getCallback(callback);
    });

    Then(/^tapping an asset tag performs an asset tag search for assets with the same tag$/, function (callback) {
        helper.getCallback(callback);
    });

    Then(/^branded field will only display the values based off the existence of a value in the brands field$/, function (callback) {
        helper.getCallback(callback);
    });

    Then(/^browser is opened and url should lead to 'http:\/\/orgchart.pfizer.com\/pages\/PeopleResults.aspx\?k=' and ends with First-Last name of product owner$/, function (callback) {
        helper.getCallback(callback);
    });
});