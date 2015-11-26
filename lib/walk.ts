function walk(nodes: CheerioElement[], cb: (CheerioElement) => any) {
	var i = 0, l = nodes.length, node: CheerioElement;
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

export default walk;