class Cat {
	constructor(name, interests) {
		this.name = name;
		this.interests = interests;
		this.unsubscribe = {};
	}

	addUnsubscription(keyName, method) {
		this.unsubscribe[keyName] = method;
	}
}

module.exports.Cat = Cat;
