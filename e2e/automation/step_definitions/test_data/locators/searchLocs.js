const searchLocs = {
    _searchField:                       '.searchbar-input',
    _clearSearchFieldBtn:               '.searchbar-clear-icon',
    _clearRecentSearchBtn:              '.clearSearch>span',
    _recentSearchHeader:                'page-search .recentSearchHeader h2',

    // filters in order including Clear button, whether or not it displayed
    _filters:                            'page-search .search-filters button>span',
    _firstFilter:                        'page-search .search-filters button:first-of-type>span',
    _secondFilter:                       'page-search .search-filters button:nth-of-type(2)>span',
    _thirdFilter:                        'page-search .search-filters button:nth-of-type(3)>span',
    _fourthFilter:                       'page-search .search-filters button:nth-of-type(4)>span',
    _fifthFilter:                        'page-search .search-filters button:nth-of-type(5)>span',
    _sixthFilter:                        'page-search .search-filters button:nth-of-type(6)>span',
    _seventhFilter:                      'page-search .search-filters button:nth-of-type(7)>span',

    _activatedFilter:                    'page-search .button-md-light_grey[ng-reflect-color="light_grey"]',

    // inside filters
    _parentFilterCategories:              '.popover-viewport ion-item-divider .item-inner>.input-wrapper',
    _parentFilterCategoriesCheckboxes:    '.item-inner>.item-icon',
    _parentSubfilterCategories:           'page-result-filter ion-item>div>div',
    _checkedFiltersWithinGroup:           'ion-item-group:first-of-type .checkbox-checked',
    _allCheckedCheckboxes:                '.checkbox-checked',
    _cancelBtn:                           'ion-popover .bar-buttons:first-of-type>button',
    _applyBtn:                            'ion-popover .bar-buttons:last-of-type>button',

    // search result view
    _numberOfAssets:                      '.label-ios>strong',
    _assetNamesSearch:                    '[tabtitle="Search"] .virtual-position h3',

    // sort and collection
    _sortByBtn:                           '[name="md-swap"]',
    _collectionAddBtn:                    '[name="md-add"]'
};

module.exports = searchLocs;