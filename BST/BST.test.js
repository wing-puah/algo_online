import { Tree } from './BST';

let tree;

beforeEach(() => {
	tree = new Tree();
	tree.insert(1);
});

describe('BST', () => {
	it('should create a root', () => {
		expect(tree.root.key).toBe(1);
		expect(tree.root.left).toBe(null);
		expect(tree.root.right).toBe(null);
	});

	it('should be able to execute a callback', () => {
		const mockCallback = jest.fn();
		const mockCallback2 = jest.fn();
		tree.insert(2);
		tree.insert(4);
		tree.insert(5);
		tree.inOrderTraverse(mockCallback);
		tree.preOrderTraverse(mockCallback2);

		expect(mockCallback).toHaveBeenCalledTimes(4);
		expect(mockCallback2).toHaveBeenCalledTimes(4);
	});
});
