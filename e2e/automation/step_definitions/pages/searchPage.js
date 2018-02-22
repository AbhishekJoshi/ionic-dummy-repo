'use strict';
let search = new framework.TEST_OBJECT({
    original_asset_counter: 0,
    asset_counter: 0,
    subfilter_number: 0,
    element_position: 0,

    clearSearchInput: function () {
        this.elems.searchField.clear();
    },

    filtersNotDisplayed: function () {
        expect(search.elems.filters._all.count()).to.eventually.equal(0);
    },

    narrowSearch: function () {
        // apply Oncology BU
        this.applyFilter(this.elems.firstFilter, 'Oncology');
        // apply Patient audience
        this.applyFilter(this.elems.thirdFilter, 'Patients');
        // apply Mobile solution type
        this.applyFilter(this.elems.fourthFilter, 'Mobile');
        // apply United States market
        this.applyFilter(this.elems.fifthFilter, 'United States');
        // apply Sutent brand
        this.applyFilter(this.elems.sixthFilter, 'Sutent');
        // apply Oncology TA
        this.applyFilter(this.elems.seventhFilter, 'Oncology');
    },

    applyFilter: function (filter, decription) {
        this.elems.numberOfAssets.getCurrentAssetNumber(true);
        filter.tap();
        this.elems.parentSubfilterCategories.findElementByTextAndClick(decription, false);
        // verify Subfilter number not exceeds less than initial result number
        step.execute(function () {
            search.elems.parentSubfilterCategories.getCurrentSubfilterNumber(true);
            expect(search.asset_counter).to.not.be.below(search.subfilter_number);
        });
        this.elems.applyBtn.tap();
        // verify filter number equals subfilter number once filter applied
        this.elems.numberOfAssets.getCurrentAssetNumber();
        step.execute(function () {
            expect(search.asset_counter).to.equal(search.subfilter_number);
        });
    },

    checkParentCategory: function (filter, description) {
        this.elems.firstFilter.waitForElementToBeDisplayed();
        switch (filter.toLowerCase()) {
            case 'market':
                this.elems.fourthFilter.tap();
                this.elems.parentFilterCategories.findElementByTextAndClickChild(
                    this.elems.parentFilterCategoriesCheckboxes, description);
                break;
        }
        helper.sleep();
    },

    isFilterApplied: function () {
        expect(search.elems.activatedFilter._all.count()).to.eventually.equal(2);
    },

    isFilterReverted: function () {
        expect(search.elems.activatedFilter._all.count()).to.eventually.equal(0);
        this.elems.numberOfAssets.getCurrentAssetNumber();
        step.execute(function () {
            expect(search.original_asset_counter).to.equal(search.asset_counter);
        });
    },

    isNumericRepresentationAppear: function () {
        expect(this.elems.numberOfAssets.getText()).to.eventually.match(/\d{2} assets found/);
    },

    isRecentClean: function () {
        expect(this.elems.numberOfAssets.isPresent()).to.eventually.be.false;
    },

    isSearchGlobal: function (expectedNumber) {
        expect(search.asset_counter).to.not.be.below(parseInt(expectedNumber));
    },

    isSubfilterChecked: function () {
        this.elems.checkedFiltersWithinGroup._all.count().then(function (checkedInGroup) {
            expect(checkedInGroup).to.not.be.below(1);
            expect(search.elems.allCheckedCheckboxes._all.count()).to.eventually.equal(checkedInGroup);
        });
    },

    resultNotAvailable: function () {
        expect(this.elems.numberOfAssets.getText()).to.eventually.equal('No results');
    },

    searchFor: function (term) {
        this.elems.searchField.sendKeys(term);
        helper.pressEnter();
        this.elems.numberOfAssets.waitForElementToBeDisplayed();
        this.elems.numberOfAssets.getCurrentAssetNumber(true);
    },

    swipeToTheEnd: function () {
        this.elems.seventhFilter.swipeTo();
    },

        locators: {
            searchField:                     {css: sharedData.searchLocs._searchField},
            clearSearchFieldBtn:             {css: sharedData.searchLocs._clearSearchFieldBtn},
            clearRecentSearchBtn:            {css: sharedData.searchLocs._clearRecentSearchBtn},
            recentSearchHeader:              {css: sharedData.searchLocs._recentSearchHeader},

            // filters in order including Clear button, whether or not it displayed
            filters:                         {css: sharedData.searchLocs._filters},
            firstFilter:                     {css: sharedData.searchLocs._firstFilter},
            secondFilter:                    {css: sharedData.searchLocs._secondFilter},
            thirdFilter:                     {css: sharedData.searchLocs._thirdFilter},
            fourthFilter:                    {css: sharedData.searchLocs._fourthFilter},
            fifthFilter:                     {css: sharedData.searchLocs._fifthFilter},
            sixthFilter:                     {css: sharedData.searchLocs._sixthFilter},
            seventhFilter:                   {css: sharedData.searchLocs._seventhFilter},

            activatedFilter:                 {css: sharedData.searchLocs._activatedFilter},

            // inside filters
            parentFilterCategories:          {css: sharedData.searchLocs._parentFilterCategories},
            parentFilterCategoriesCheckboxes:{css: sharedData.searchLocs._parentFilterCategoriesCheckboxes},
            parentSubfilterCategories:       {css: sharedData.searchLocs._parentSubfilterCategories},
            checkedFiltersWithinGroup:       {css: sharedData.searchLocs._checkedFiltersWithinGroup},
            allCheckedCheckboxes:            {css: sharedData.searchLocs._allCheckedCheckboxes},

            cancelBtn:                       {css: sharedData.searchLocs._cancelBtn},
            applyBtn:                        {css: sharedData.searchLocs._applyBtn},

            // search result view
            numberOfAssets:                  {css: sharedData.searchLocs._numberOfAssets},
            assetNamesSearch:                {css: sharedData.searchLocs._assetNamesSearch},

            // sort and collection
            sortByBtn:                       {css: sharedData.searchLocs._sortByBtn},
            collectionAddBtn:                {css: sharedData.searchLocs._collectionAddBtn},
        }
    });

module.exports = search;