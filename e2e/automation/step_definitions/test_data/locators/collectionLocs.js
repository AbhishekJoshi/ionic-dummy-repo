const collectionLocs = {
    _addToCollectionFromSearchBtn:   '.fixed-content ion-fab:first-of-type',
    _createNewCollectionBtn:         'pfizer-asset-collection-add ion-label>h3',
    _cancelBtn:                      '.alert-button-default:first-of-type',
    _confirmBtn:                     '.alert-button-default:last-of-type',
    _addToCollectionAlert:           '[id^="alert-msg"]',

    _collectionTitleField:           '[placeholder="Title"]',
    _collectionDescriptionField:     '[placeholder="Description"]',

    // collections tab
    _editCollectionsBtn:             'page-collections .toolbar div button',
    _createCollectionBtn:            '.toolbar>.bar-buttons>button',
    _deleteCollectionBtn:            '.remove-circle>.white-line',
    _collectionTitles:               '.collection-title b',
    _assetNumbers:                   '.collection-title>p',
    // inside collection
    _backBtn:                        'page-collection-view .back-button',
    _shareBtn:                       'page-collection-view ion-buttons>button:first-of-type',
    _editBtn:                        'page-collection-view ion-buttons>button:last-of-type',
    _collectionTitle:                'page-collection-view .toolbar-title',
    _collectionDescription:          '.collection-view--description_text',
    _confirmEditBtn:                 '.alert-button-default:first-of-type',

};

module.exports = collectionLocs;