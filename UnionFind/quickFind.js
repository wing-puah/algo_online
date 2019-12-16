function QuickFind(idLength) {
	this.allId = Array.from({ length: idLength }, (v, i) => i + 1);
}

const proto = QuickFind.prototype;

proto.setAllId = function(allId) {
	this.allId = allId;
};

proto.connected = function(p, q) {
	return this.allId[p] === this.allId[q];
};

proto.union = function(p, q) {
	const _tempP = this.allId[p];
	const _tempQ = this.allId[q];

	const newAllId = this.allId.map(el => {
		return el === _tempP ? _tempQ : el;
	});
	this.setAllId(newAllId);
};

export default QuickFind;
