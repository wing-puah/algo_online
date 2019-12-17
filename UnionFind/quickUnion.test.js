import QuickUnion from './quickUnion';

let quickUnion;

beforeAll(() => {
	quickUnion = new QuickUnion([0, 1, 1, 2, 0, 4, 5]);
});

describe('QuickUnion', () => {
	it('should initialise with array', () => {
		const { idArray } = quickUnion;
		expect(Array.isArray(idArray)).toBe(true);
	});

	it('should be identify root', () => {
		const testRoot = quickUnion.root(4);
		const testRootSelf = quickUnion.root(1);
		expect(testRoot).toBe(0);
		expect(testRootSelf).toBe(1);
	});

	it('should check if two indices are connected', () => {
		expect(quickUnion.connected(1, 3)).toBe(true);
		expect(quickUnion.connected(0, 3)).toBe(false);
	});

	it('should connect two indices', () => {
		const rootP = quickUnion.root(5);
		const rootq = quickUnion.root(3);
		quickUnion.union(5, 3);
		expect(quickUnion.get(rootP)).toBe(rootq);
	});
});
