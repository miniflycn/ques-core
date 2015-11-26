"use strict";
function walk(nodes, cb) {
    var i = 0, l = nodes.length, node;
    if (l) {
        for (; i < l; i++) {
            node = nodes[i];
            if (node.type === 'tag') {
                cb(node);
                walk(node.children, cb);
            }
        }
    }
}
exports.default = walk;
