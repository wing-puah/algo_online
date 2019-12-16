import QuickFind from './quickFind';

describe('QuickFind', () => {
	it('should initialise with array', () => {
		const quickFind = new QuickFind(4);
		const { allId } = quickFind;

		expect(allId.length).toBe(4);
		expect(allId[0]).toBe(1);
		expect(allId[allId.length - 1]).toBe(4);
	});

	it('should check if two indices are connected', () => {
		const q1 = new QuickFind();
		const q2 = new QuickFind();
		q1.allId = [0, 0, 3];
		q2.allId = [1, 2, 3];

		expect(q1.connected(0, 1)).toBe(true);
		expect(q2.connected(0, 1)).toBe(false);
	});

	it('should connect two indices', () => {
		const q1 = new QuickFind();
		q1.setAllId([0, 1, 2, 3]);
		q1.union(0, 1);

		expect(q1[0]).toEqual(q1[1]);

		q1.union(1, 2);
		expect(q1[0]).toEqual(q1[2]);
		expect(q1[1]).toEqual(q1[2]);
	});
});
