/*
 * @Author: Rainy
 * @Date: 2019-11-14 19:25:01
 * @LastEditors: Rainy
 * @LastEditTime: 2019-11-28 21:28:12
 */

import { func } from 'types'
export class BinaryTree {

    key: any;
    left: any = null;
    right: any = null;
    root: any = null;

    constructor(key: any) {
        this.key = key;
        this.left = null;
        this.right = null;
    }

    _insertNode(node: BinaryTree, newNode: BinaryTree): void {}
    insert(key: any) {}

    _searchNode(node: BinaryTree): boolean {
        return false;
    }
    search(node: BinaryTree, key: any): any {}

    _findMinNode(node: BinaryTree): BinaryTree | any {}
    _minNode(node: BinaryTree): BinaryTree | any {}
    min(): any {}

    _findMaxNode(node: BinaryTree): BinaryTree | any {}
    _maxNode(node: BinaryTree): BinaryTree | any {}
    max(): any {}

    _removeNode(node: BinaryTree, key: any): BinaryTree | any {}
    remove(key: any) {}

    _preOrderTraverse(node: BinaryTree, callback: func): any {}
    preOrderTraverse(): any {}

    _inOrderTraverseNode(node: BinaryTree, callback: func): any {}
    inOrderTraverseRet(): any {}

    _postOrderTraverseRet(node: BinaryTree, callback: func): any {}
    postOrderTraverseRet(): any {}
}
