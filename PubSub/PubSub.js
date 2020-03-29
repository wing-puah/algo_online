class PubSub {
	constructor() {
		this.subscribers = {};
	}

	subscribe(event, callback) {
		if (!this.subscribers[event]) {
			this.subscribers[event] = [];
		}
		const index = this.subscribers[event].push(callback) - 1;
		const { subscribers } = this;

		return {
			unsubscribe: function() {
				subscribers[event].splice(index, 1);
			},
		};
	}

	publish(event, data) {
		if (!this.subscribers[event]) {
			return;
		}
		this.subscribers[event].forEach(subscriberCallback =>
			subscriberCallback(data),
		);
	}
}

module.exports.PubSub = PubSub;
