"use strict";
var cheerio = require('cheerio');
var tag_1 = require('./lib/tag');
var walk_1 = require('./lib/walk');
class Page {
    constructor(content, path) {
        /**
         * unique id
         */
        this.uid = 0;
        /**
         * custom targets
         */
        this.customTags = new Set();
        /**
         * ui targets
         */
        this.uiTags = new Set();
        let $ = this.$ = cheerio.load(content);
        this.mainScript = $('script', 'body');
        this.buildTag();
    }
    buildTag() {
        var $ = this.$, tags = new tag_1.default();
        walk_1.default($('body').get(), function (node) {
            tags.add(node.name);
        });
        tags.custom().forEach(function (customTag) {
        });
    }
}
exports.default = Page;
