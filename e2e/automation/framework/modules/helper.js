'use strict';

let helper = {
    _counter: 0,
    _element: '',
    _appVersion: '',


    // works only if native keboard displayed
    closeKeyboard: function () {
        this.switchContext();
        generic.elems.doneBtn.click();
        this.switchContext(1);
    },

    compareStringFromArrays: function (elementsToProcess, expectedArray, sort, description) {
        description = description || '';
        let textFromElements = [];
        elementsToProcess._all.each(function (element) {
            element.getText().then(function (text) {
                textFromElements.push(text.trim());
            })
        }).then(function () {
            if (sort) {
                textFromElements = textFromElements.sort().join();
                expectedArray = expectedArray.sort().join();
            } else {
                textFromElements = textFromElements.join();
                expectedArray = expectedArray.join();
            }
            expect(textFromElements).to.equal(expectedArray, 'Arrays do not match. ' + description)
        });
    },

    getCallback: function (callback) {
        return step.execute(function () {
            return callback();
        })
    },

    enterFirstAsset: function () {
            helper.sleep(2);
            search.elems.assetNamesSearch._all.count().then(function (text) {
                helper.tap(search.elems.assetNamesSearch._all.get(text - 1));
            });
    },

    // works only if native keboard displayed
    pressEnter: function () {
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
        helper.sleep(3);
    },

    printPage: function () {
        browser.getPageSource().then(function (text) {
            console.log(text);
        });
    },

    setAppVersion: function() {
        browser.getCapabilities().then((cap) => {
            helper._appVersion = cap.get('appVersion');
        });
    },

    /**
     * @param {object}  [element]
     * @param {int}  [timespan]
     * */
    sleep: function (element, timespan) {
        timespan = timespan || 1;
        browser.sleep(timespan * 1000);
    },

    switchContext: function (context) {
        context = context || 0;
        helper.sleep(2);
        browser.driver.listContexts().then(function (text) {
            if (text.length < 2 && helper._counter < 15) {
                helper._counter++;
                helper.sleep();
                helper.switchContext(context);
            } else {
                browser.driver.selectContext(text[context]);
            }
        });
    },

    tap: function (element) {
        helper.sleep(4);
        let x, y;
        element.getLocation().then(function (loc) {
            x = loc.x;
            y = loc.y + 25;
        });
        step.execute(function () {
            browser.executeScript("mobile: tap", {"tapCount": 1, "touchCount": 1, "duration": 1.0, "x": x, "y": y});
            helper.sleep(3);
        });
    },
};

module.exports = helper;