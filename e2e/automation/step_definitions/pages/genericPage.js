'use strict';

let generic = new framework.TEST_OBJECT({
    counter: 0,

    tapButton: function (button) {
        this.elems.searchBtn.waitForElementToBeDisplayed(20);
        switch (button.toLowerCase()) {
            case 'home':
                this.elems.homeBtn.tap();
                break;
            case 'search':
                this.elems.searchBtn.tap();
                break;
            case 'collections':
                this.elems.collectionBtn.tap();
                break;
            case 'about':
                this.elems.aboutBtn.tap();
                break;
            // search
            case 'clear':
                search.elems.firstFilter.tap();
                break;
            case 'clear recent':
                search.searchFor('kidney');
                search.clearSearchInput();
                search.elems.clearSearchFieldBtn.tap();
                search.elems.clearRecentSearchBtn.tap();
                break;
            // collections in search
            case 'add to collection':
                collection.elems.addToCollectionFromSearchBtn.tap();
                break;
            // collections tab
            case 'create collection':
                collection.elems.createCollectionBtn.tap();
                break;
            case 'edit collections':
                collection.elems.editCollectionsBtn.tap();
                break;
            case 'delete collection':
                collection.elems.deleteCollectionBtn.tap();
                collection.elems.confirmBtn.tap();
                break;
            // inside collection
            case 'edit collection':
                collection.elems.editBtn.tap();
                break;
        }
        helper.sleep(2);
    },

    isButtonPresent: function (button, name) {
        expect(button.getText()).to.eventually.equal(name);
    },

    isWelcomeScreenDisplayed: function () {
        this.elems.slideImages._first.waitForElementToBeDisplayed();
    },

    processWelcomeScreen: function () {
        this.checkSlide(sharedData.firstSlideTitle, sharedData.firstSlideDescription);
        this.elems.buttons._third.tap();
        this.checkSlide(sharedData.secondSlideTitle, sharedData.secondSlideDescription);
        this.elems.buttons._fourth.tap();
        this.checkSlide(sharedData.thirdSlideTitle, sharedData.thirdSlideDescription);
        this.elems.buttons._fifth.tap();
        this.checkSlide(sharedData.fourthSlideTitle, sharedData.fouthSlideDescription);
        this.elems.buttons._last.tap();
        this.checkSlide(sharedData.lastSlideTitle, sharedData.lastSlideDescription);
        this.elems.buttons._first.tap();
    },

    skipWelcomeScreen: function (scenario) {
        if (!scenario.includes('Welcome screen check')) {
            this.elems.buttons._last.tap();
            this.elems.buttons._first.tap();
            this.elems.homeBtn.waitForElementToBeDisplayed();
        }
    },

    waitForSync: function () {
        this.elems.syncMessage.waitForElementToBeDisplayed();
    },

    checkSlide: function (titleText, descriptionText) {
        expect(this.elems.slideImages._all.get(this.counter).isPresent()).to.eventually.be.true;
        expect(this.elems.slideTitles._all.get(this.counter).getText()).to.eventually.equal(titleText);
        expect(this.elems.slideDescriptions._all.get(this.counter).getText()).to.eventually.equal(descriptionText);
        this.counter++;
    },

    locators: {
        // welcome screen
        buttons:                        {css: sharedData.genericLocs._buttons},
        slideImages:                    {css: sharedData.genericLocs._slideImages},
        slideTitles:                    {css: sharedData.genericLocs._slideTitles},
        slideDescriptions:              {css: sharedData.genericLocs._slideDescriptions},

        // main buttons
        homeBtn:                        {css: sharedData.genericLocs._homeBtn},
        searchBtn:                      {css: sharedData.genericLocs._searchBtn},
        collectionBtn:                  {css: sharedData.genericLocs._collectionBtn},
        aboutBtn:                       {css: sharedData.genericLocs._aboutBtn},

        // body
        syncMessage:                    {css: sharedData.genericLocs._syncMessage},

        // inside asset
        assetTitle:                     {css: sharedData.genericLocs._assetTitle},
        assetDescription:               {css: sharedData.genericLocs._assetDescription},
        downloadOrVisitSiteBtn:         {css: sharedData.genericLocs._downloadOrVisitSiteBtn},
        aboutSection:                   {css: sharedData.genericLocs._aboutSection},
        moreInfoBtn:                    {css: sharedData.genericLocs._moreInfoBtn},
        properties:                     {css: sharedData.genericLocs._properties},
        productOwners:                  {css: sharedData.genericLocs._productOwners},
        orgChartBtns:                   {css: sharedData.genericLocs._orgChartBtns},
        mailBtns:                       {css: sharedData.genericLocs._mailBtns},
        backBtn:                        {css: sharedData.genericLocs._backBtn},
        shareBtn:                       {css: sharedData.genericLocs._shareBtn},
        addToCollectionBtn:             {css: sharedData.genericLocs._addToCollectionBtn},
        // native keyboard
        doneBtn:                        {xpath: sharedData.genericLocs._doneBtn},
        // native Cancel dialogue
        cancelBtn:                      {xpath: sharedData.genericLocs._cancelBtn},
    }
});

module.exports = generic;