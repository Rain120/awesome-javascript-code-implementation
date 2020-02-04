/*
 * @Author: Rainy
 * @Date: 2019-11-14 19:25:01
 * @LastEditors: Rainy
 * @LastEditTime: 2019-12-01 11:54:20
 */

import { BinaryTree } from '../binaryTree';

// How to test for a class ????

let nodes = [8, 3, 10, 1, 6, 14, 4, 7, 13];

let binaryTree = new BinaryTree(null);

nodes.forEach(key => {
  binaryTree.insert(key);
});

let preOrderTraverseRet = [];

let inOrderTraverseRet = [];

let postOrderTraverseRet = [];

let callback = (key: any) => {
  console.log(key);
};
binaryTree.preOrderTraverse((key: any) => {
  preOrderTraverseRet.push(key);
});

binaryTree.inOrderTraverse((key: any) => {
  inOrderTraverseRet.push(key);
});

binaryTree.postOrderTraverse((key: any) => {
  postOrderTraverseRet.push(key);
});

test('Foo instanceof Foo should false', () => {
  expect(binaryTree.insert(1)).toBe(undefined);
});
