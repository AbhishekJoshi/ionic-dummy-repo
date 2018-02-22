'use strict';

let collection = new framework.TEST_OBJECT({

    checkCollection: function (title, descriptionOrAssetNumber, basicCheck, exitEditMode) {
        if (title.includes('new')) {
            this.elems.backBtn.tap();
        };
        if (basicCheck) {
            this.elems.collectionTitles.findElementByTextAndCheckChildText(this.elems.assetNumbers, title,
                descriptionOrAssetNumber);
            return;
        } else {
            this.elems.collectionTitles.findElementByTextAndCheckChildText(this.elems.assetNumbers, title,
                search.asset_counter);
        }
        this.elems.collectionTitles.findElementByTextAndClick(title);
        step.execute(function () {
            expect(collection.elems.collectionDescription.getText()).to.eventually.equal(descriptionOrAssetNumber);
        });
    },

    editProperties: function () {
        this.elems.collectionDescription.tap();
    },

    fillAndConfirmCollection: function (title, description, action) {
        this.elems.collectionTitleField.clear().sendKeys(title);
        this.elems.collectionDescriptionField.clear().sendKeys(description);
        if (action.includes('update')) {
            this.elems.confirmEditBtn.tap();
            return;
        }
        this.elems.confirmBtn.tap();
    },

    isCollectionDeleted: function (collectionName) {
        collectionName = collectionName || 'favorites';
        this.elems.collectionTitles.isElementWithTextNotDisplayed(collectionName);
    },

    openFavoritesCollection: function () {
        this.elems.collectionTitles.findElementByTextAndClick('favorites');
    },

    prepareNewCollection: function () {
        this.elems.createNewCollectionBtn._first.tap();
        let numberOfAssetsFromAlert = 0;
        // make sure number of assets in alert matches the one from result set
        collection.elems.addToCollectionAlert.getText().then(function (text) {
            numberOfAssetsFromAlert = parseInt(text.replace(/^\D+/g, ''));
        });
        step.execute(function () {
           expect(numberOfAssetsFromAlert).to.equal(search.asset_counter);
        });
        this.elems.confirmBtn.tap();
        this.elems.collectionTitleField.waitForElementToBeDisplayed();
    },

    locators: {
        addToCollectionFromSearchBtn:               {css: sharedData.collectionLocs._addToCollectionFromSearchBtn},
        createNewCollectionBtn:                     {css: sharedData.collectionLocs._createNewCollectionBtn},
        cancelBtn:                                  {css: sharedData.collectionLocs._cancelBtn},
        confirmBtn:                                 {css: sharedData.collectionLocs._confirmBtn},
        addToCollectionAlert:                       {css: sharedData.collectionLocs._addToCollectionAlert},

        collectionTitleField:                       {css: sharedData.collectionLocs._collectionTitleField},
        collectionDescriptionField:                 {css: sharedData.collectionLocs._collectionDescriptionField},

        // collections tab
        editCollectionsBtn:                         {css: sharedData.collectionLocs._editCollectionsBtn},
        createCollectionBtn:                        {css: sharedData.collectionLocs._createCollectionBtn},
        deleteCollectionBtn:                        {css: sharedData.collectionLocs._deleteCollectionBtn},
        collectionTitles:                           {css: sharedData.collectionLocs._collectionTitles},
        assetNumbers:                               {css: sharedData.collectionLocs._assetNumbers},
        // inside collection:
        backBtn:                                    {css: sharedData.collectionLocs._backBtn},
        shareBtn:                                   {css: sharedData.collectionLocs._shareBtn},
        editBtn:                                    {css: sharedData.collectionLocs._editBtn},
        collectionTitle:                            {css: sharedData.collectionLocs._collectionTitle},
        collectionDescription:                      {css: sharedData.collectionLocs._collectionDescription},
        confirmEditBtn:                             {css: sharedData.collectionLocs._confirmEditBtn},
    }
});

module.exports = collection;