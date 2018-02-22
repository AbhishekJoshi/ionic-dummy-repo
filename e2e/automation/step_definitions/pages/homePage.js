'use strict';

let home = new framework.TEST_OBJECT({


        locators: {
            // assets
            assetNamesHome:              {css: sharedData.genericLocs._assetNamesHome},
            assetNamesCategories:        {css: sharedData.genericLocs._assetNamesCategories},
            assetMainProperties:         {css: sharedData.genericLocs._assetMainProperties},

            _filtersPanelHome:         {css: sharedData.genericLocs._filtersPanelHome}


        }
    });

module.exports = home;