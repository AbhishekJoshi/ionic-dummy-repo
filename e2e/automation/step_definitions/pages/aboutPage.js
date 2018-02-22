'use strict';

let about = new framework.TEST_OBJECT({

    checkDescription: function () {
        expect(this.elems.description.getText()).to.eventually.equal(sharedData.dashAboutDescription);
    },

    checkButtons: function () {
        expect(this.elems.feedbackBtn.getText()).to.eventually.equal('Send Feedback');
        expect(this.elems.reportBugBtn.getText()).to.eventually.equal('Report Bug');
    },

    checkVersion: function () {
        expect(this.elems.version.getText()).to.eventually.contain(helper._appVersion);
    },

    locators: {
        description:                        {css: sharedData.aboutLocs._decription},
        feedbackBtn:                        {css: sharedData.aboutLocs._feedbackBtn},
        reportBugBtn:                       {css: sharedData.aboutLocs._reportBugBtn},
        version:                            {css: sharedData.aboutLocs._version}
    }


});

module.exports = about;