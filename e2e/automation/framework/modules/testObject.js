const Page = function(o) {
    for (let i in o) {
        this[i] = o[i];
    }
    this.index();
    return this;
},

    _ = require("underscore");

Page.prototype.index = function() {
    this.elems = this.prepareElements(this.locators);
    return this;
};


Page.prototype.prepareElements = function(locators) {
    let api = require("./apiExtend");
    let loc, i, type, elems = {}, items = ['_all', '_first', '_second', '_third', '_fourth', '_fifth', '_last'];
    for(i in locators) {
        loc = locators[i];
        type = Object.keys(loc)[0];
        elems[i] = element(By[type](loc[type]));
        elems[i]._all = element.all(By[type](loc[type]));
        elems[i]._first = element.all(By[type](loc[type])).first();
        elems[i]._second = element.all(By[type](loc[type])).get(1);
        elems[i]._third = element.all(By[type](loc[type])).get(2);
        elems[i]._fourth = element.all(By[type](loc[type])).get(3);
        elems[i]._fifth = element.all(By[type](loc[type])).get(4);
        elems[i]._last = element.all(By[type](loc[type])).last();
    }
    Object.values(elems).forEach((item) => {
        Object.keys(api).forEach((method) => {
            item[method] = (par1, par2, par3, par4) => {
                api[method](item, par1, par2, par3, par4);
            };

            items.forEach((key) => {
                item[key][method] = (par1, par2, par3, par4) => {
                    api[method](item[key], par1, par2, par3, par4);
                };
            });
        });
    });
    return elems;
};

module.exports = Page;