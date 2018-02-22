'use strict';

let apiExtend = {

    /**
     * @param {object}  elements
     * @param {int}  requiredText
     * @param {int}  strict
     * */
    findElementByTextAndClick: function (elements, requiredText, strict) {
        elements.isPresent().then(function () {
            let counter = 0;
            elements._all.each(function (element) {
                element.getText().then(function (text) {
                    if (strict && text.toLowerCase().trim() === requiredText.toLowerCase()) {
                        search.element_position = counter;
                        apiExtend.tap(element);
                    } else {
                        if (text.toLowerCase().trim().includes(requiredText.toLowerCase())) {
                            search.element_position = counter;
                            apiExtend.tap(element);
                        }
                    }
                    counter++;
                }, function (err) {
                    return false;
                });
            })
        })
    },

    findElementByTextAndCheckChildText: function (elements, childElements, expectedTextInParent, expectedText, strict) {
        let elementFound = false;
        let counter = 0;
        step.execute(function () {
            elements._all.each(function (element) {
                element.getText().then(function (text) {
                    if (text.trim() === expectedTextInParent) {
                        childElements._all.get(counter).getText().then(function (textChildElement) {
                            if (strict && textChildElement.trim() === expectedText) {
                                elementFound = true;
                            } else {
                                if (textChildElement.trim().includes(expectedText)) {
                                    elementFound = true;
                                }
                            }
                        });
                        return;
                    }
                    counter++;
                })
            })
        }).then(function () {
            expect(elementFound).to.be.true;
        });
    },

    /**
     * @param {object}  elements
     * @param {object}  childElements
     * @param {int}  expectedTextInParent
     * @param {int}  strict
     * */
    findElementByTextAndClickChild: function (elements, childElements, expectedTextInParent, strict) {
        let counter = 0;
        elements._all.each(function (element) {
            element.getText().then(function (text) {
                if (strict) {
                    if (text.trim() === expectedTextInParent) {
                        helper.tap(childElements._all.get(counter));
                        return;
                    }
                } else {
                    if (text.trim().includes(expectedTextInParent)) {
                        helper.tap(childElements._all.get(counter));
                        return;
                    }
                }
                counter++;
            }, function (err) {
                return false;
            })
        })
    },

    findElementByTextAndReturnElement: function (elements, requiredText, strict) {
        step.execute(function () {
            elements.isPresent().then(function () {
                elements._all.each(function (element) {
                    element.getText().then(function (text) {
                        if (strict && text.trim() === requiredText) {
                            apiExtend.tap(element);
                        } else {
                            if (text.trim().includes(requiredText)) {
                                helper._element = element;

                            }
                        }
                    }, function (err) {
                        return false;
                    })
                })
            });
        });
    },

    getCurrentAssetNumber: function (element, overrideOriginal) {
        step.execute(function () {
            element.getText().then(function (text) {
                if (overrideOriginal) {
                    search.asset_counter = parseInt(text);
                    search.original_asset_counter  = parseInt(text);
                } else {
                    search.asset_counter = parseInt(text);
                }
            });
        });
    },

    getCurrentSubfilterNumber: function (element, useCounter) {
        if (useCounter) {
            element._all.get(search.element_position).getText().then(function (text) {
                search.subfilter_number = parseInt(text.replace(/.*(?=\()./, ''));
            });
        } else {
            element.getText().then(function (text) {
                search.subfilter_number = parseInt(text.replace(/.*(?=\()./, ''));
            });
        }
    },

    isElementWithTextNotDisplayed: function (elements, requiredText, strict) {
        elements.isPresent().then(function () {
            elements._all.each(function (element) {
                element.getText().then(function (text) {
                    if (strict && text.toLowerCase().trim() === requiredText) {
                        expect.fail(0, 1, 'Deleted element was displayed');
                    } else {
                        if (text.toLowerCase().trim().includes(requiredText)) {
                            expect.fail(0, 1, 'Deleted element was displayed');
                        }
                    }
                    counter++;
                }, function (err) {
                    return false;
                });
            })
        })
    },

    swipe: function (element, elementDest) {
        helper.sleep();
        let orX, orY, endX, endY;
        element.getLocation().then(function (loc) {
            orX = loc.x;
            orY = loc.y + 25;
        });
        elementDest.getLocation().then(function (loc) {
            endX = loc.x;
            endY = loc.y + 25;
            console.log(orX, orY, endX, endY);
        });
        step.execute(function() {
            browser.executeScript("mobile: swipe", { "touchCount": 1, "startX": orX, "startY": orY, "endX": endX,
                "endY": endY, "duration": 0.7 });
        });
    },

    swipeTo: function (element) {
        browser.actions().mouseMove(element).perform();
    },

    /**
     * @param {object}  element
     * @param {string}  direction
     * */
    scrollTo: function (element, direction) {
        let directions = {};
        switch (direction) {
            case 'u':
                directions = {"direction":"down"};
                break;
            case 'd':
                directions = {"direction":"up"};
                break;
            case 'l':
                directions = {"direction":"right"};
                break;
            case 'r':
                directions = {"direction":"left"};
                break;

        }
        let counter = 0;
        if (counter < 10) checkElement(element, directions);
        function checkElement(element, directions) {
            element.isDisplayed().then((displayed) => {
                if (!displayed) {
                    counter++;
                    browser.executeScript("mobile:swipe", directions);
                    checkElement(element,  directions);
                }
            });
        }
    },

    tap: function (element) {
        helper.sleep();
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

    /**
     * @param {object}  element
     * @param {int}     [timeout]
     * */
    waitForElementToBeDisplayed: function (element, timeout) {
        timeout = timeout || 10;
        helper.sleep();
        browser.wait(function () {
            return element.isDisplayed().then(function (displayed) {
                if (displayed) {
                    browser.sleep(500);
                    return true;
                } else {
                    return false;
                }
            }, function (err) {});
        }, timeout * 1000);
    },

    /**
     * @param {object}  element
     * @param {int}     [timeout]
     * */
    waitForElementToBeNotDisplayed: function (element, timeout) {
        timeout = timeout || 40;
        helper.sleep();
        browser.wait(function () {
            return element.isDisplayed().then(function (displayed) {
                    return !displayed;
                }, function () {
                    return true;
                });
        }, timeout * 1000);
    },
};

module.exports = apiExtend;