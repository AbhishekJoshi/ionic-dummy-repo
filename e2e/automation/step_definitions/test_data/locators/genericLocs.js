const genericLocs = {
    // welcome screen
    _buttons:                'button',
    _slideImages:            '[src^="assets/images/tutorial_"]',
    _slideTitles:            '.slide-zoom h1',
    _slideDescriptions:      '.slide-zoom p',

    // main buttons
    _homeBtn:                '.ion-md-home',
    _searchBtn:              '.ion-md-search',
    _collectionBtn:          '.ion-md-star',
    _aboutBtn:               '.ion-md-help-circle',

    //body
    _syncMessage:            '.toast-message',

    // inside asset
    _assetTitle:             '.asset-banner--title',
    _assetDescription:       '.asset-banner--description',
    _downloadOrVisitSiteBtn: 'page-asset-view .scroll-content .button-large-ios',
    _aboutSection:           'truncate-text>div',
    _moreInfoBtn:            '[aria-label="arrow down"]',
    _properties:             '.note-ios',
    _productOwners:          'product-owner .label-ios>h3',
    _orgChartBtns:           '[name="ios-people"]',
    _mailBtns:               '[name="mail"]',
    _backBtn:                '[name="arrow-back"]',
    _shareBtn:               '[name="ios-share-outline"]',
    _addToCollectionBtn:     '[name="ios-add"]',
    // native keyboard
    _doneBtn:                '//*[@name="Done"]',
    // native cancel dialogue
    _cancelBtn:              '//*[@name="Cancel"]',
};

module.exports = genericLocs;