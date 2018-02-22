const {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then}) {
    Given(/^search page opened$/, function (callback) {
        generic.tapButton('search');
        generic.elems.syncMessage.waitForElementToBeNotDisplayed();
        helper.getCallback(callback);
    });

    When(/^I search for "([^"]*)"$/, function (searchTerm, callback) {
        search.searchFor(searchTerm);
        helper.getCallback(callback);
    });

    When(/^I calculate asset number$/, function (callback) {
        helper.getCallback(callback);
    });

    When(/^I slide filters to the right$/, function (callback) {
        search.elems.sixthFilter.swipeTo();
        helper.getCallback(callback);
    });

    When(/^I input "([^"]*)" search phrase$/, function (callback) {

        helper.getCallback(callback);
    });

    When(/^I navigate through every filter$/, function (callback) {

        helper.getCallback(callback);
    });

    When(/^click 'Select all' filter by group checkbox$/, function (callback) {

        helper.getCallback(callback);
    });

    When(/^deselect any option from selected$/, function (callback) {

        helper.getCallback(callback);
    });

    When(/^no search for designated phrase$/, function (callback) {
        search.resultNotAvailable();
        helper.getCallback(callback);
    });

    When(/^I apply "([^"]*)" "([^"]*)" filter$/, function (filterCategory, subfilter, callback) {
        search.applyFilter(search.elems.firstFilter, subfilter);
        helper.getCallback(callback);
    });

    When(/^I check "([^"]*)" "([^"]*)" filter category/, function (filterCategory, subfilter, callback) {
        search.checkParentCategory(filterCategory, subfilter);
        helper.getCallback(callback);
    });

    Then(/^I should see Business Units, Audience, Solution Type, Market, Brand, Therapeutic Area filters$/, function (callback) {
        helper.compareStringFromArrays(search.elems.filters,
            ['Business Units', 'Audience', 'Solution Type', 'Market', 'Brand', 'Therapeutic Area']);
        helper.getCallback(callback);
    });

    Then(/^I should see result list related to oncology$/, function (callback) {

        helper.getCallback(callback);
    });

    Then(/^I should see filters where subfilters number on the inside equals or less that initial result number when I apply every filter from each category$/, function (callback) {
        search.narrowSearch();
        helper.getCallback(callback);
    });

    Then(/^filter tab becomes highlighted$/, function (callback) {
        search.isFilterApplied();
        helper.getCallback(callback);
    });

    Then(/^all the subfilters have to become checked$/, function (callback) {
        search.isSubfilterChecked();
        helper.getCallback(callback);
    });

    Then(/^'Select all' checkbox have to become unchecked$/, function (callback) {

        helper.getCallback(callback);
    });

    Then(/^filter have to be reverted and initial result set should appear$/, function (callback) {
        search.isFilterReverted();
        helper.getCallback(callback);
    });

    Then(/^I should see Suggested search list$/, function (callback) {

        helper.getCallback(callback);
    });

    Then(/^I expect to see not less than "([^"]*)" results$/, function (assetsNumber, callback) {
        search.isSearchGlobal(assetsNumber);
        helper.getCallback(callback);
    });

    Then(/^I can see assets related to oncology, breast, screening, cell, even if cancer word itself is not populated in asset’s metadata$/, function (callback) {

        helper.getCallback(callback);
    });

    Then(/^I should be able to sort results in alphabetical order$/, function (callback) {

        helper.getCallback(callback);
    });

    Then(/^filters should not appear$/, function (callback) {
        search.filtersNotDisplayed();
        helper.getCallback(callback);
    });

    Then(/^I should see Search field, recent searches title, Home-Search-Collections-About buttons at the page bottom$/, function (callback) {

        helper.getCallback(callback);
    });

    Then(/^I should see the last filter which says 'Therapeutic area'$/, function (callback) {
        generic.isButtonPresent(search.elems.sixthFilter, 'Therapeutic Area');
        helper.getCallback(callback);
    });

    When(/^I tap a category value I will be taken to asset listing screen that displays assets for that category value$/, function (callback) {

        helper.getCallback(callback);
    });

    When(/^I swipe down on the asset view list will show a search bar$/, function (callback) {

        helper.getCallback(callback);
    });


    Then(/^I should be able to sort results in alphabetical and Publish date order$/, function (callback) {

        helper.getCallback(callback);
    });

    Then(/^I can see assets with metadata related to : oncology, bethesda, issn$/, function (callback) {

        helper.getCallback(callback);
    });

    Then(/^I should see a number or results under filters which says 'xx' assets found' for 'cancer'$/, function (callback) {
        search.isNumericRepresentationAppear();
        helper.getCallback(callback);
    });

    Then(/^recent searches should be cleared$/, function (callback) {
        search.isRecentClean();
        helper.getCallback(callback);
    });
});