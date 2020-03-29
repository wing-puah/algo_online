const { PubSub } = require('./PubSub');
const { Cat } = require('./Cat');

const catDomPubSub = new PubSub();

const cat1 = new Cat('Midnight', ['climb trees', 'hunt', 'weather']);
const cat2 = new Cat('Bear', ['humour', 'weather', 'camera skills']);
const cat3 = new Cat('Smokey', ['hunt', 'camera skills']);
const allCat = [cat1, cat2, cat3];

allCat.forEach((singleCat, idx) => {
	const { name, interests } = singleCat;
	interests.forEach(interest => {
		const { unsubscribe } = catDomPubSub.subscribe(interest, data =>
			printInterestReceived(name, interest, data),
		);
		allCat[idx].addUnsubscription(interest, unsubscribe);
	});
});

function printInterestReceived(name, interest, data) {
	console.log(`${name} has received information for ${interest}: ${data}`);
}

catDomPubSub.publish('climb trees', 'Learn coordination');
catDomPubSub.publish('weather', 'Might rain tomorrow, stay indoors!');
catDomPubSub.publish(
	'hunt',
	'Predicted migration of house rats tomorrow, stay alert',
);

cat1.unsubscribe.hunt();

catDomPubSub.publish('hunt', 'Sharpen your claws');
