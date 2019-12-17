function QuickUnion(idArray) {
	this.idArray = idArray;
}

const proto = QuickUnion.prototype;

proto.root = function(id) {
	let rootId = id;

	while (this.idArray[rootId] !== rootId) {
		rootId = this.idArray[rootId];
	}

	return rootId;
};

proto.connected = function(p, q) {
	return this.root(p) === this.root(q);
};

proto.union = function(p, q) {
	console.log({ rootq: this.root(q) });
	console.log({ rootp: this.root(p) });
	this.idArray[this.root(p)] = this.root(q);
};

proto.get = function(id) {
	return this.idArray[id];
};

export default QuickUnion;
