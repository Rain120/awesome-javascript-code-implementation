/*
 * @Author: Rainy
 * @Date: 2019-11-14 19:25:01
 * @LastEditors  : Rainy
 * @LastEditTime : 2020-02-04 17:10:36
 */

import { WithParamsFunction } from 'types';

type TreeReturn = BinaryTree | null;

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

  _insertNode(node: BinaryTree, newNode: BinaryTree): void {
    if (node.key > newNode.key) {
      if (node.left) {
        this._insertNode(node.left, newNode);
      } else {
        node.left = newNode;
      }
    } else {
      if (node.right) {
        this._insertNode(node.right, newNode);
      } else {
        node.right = newNode;
      }
    }
  }
  insert(key: any) {
    let newNode = new BinaryTree(key);
    if (this.root) {
      this._insertNode(this.root, newNode);
    } else {
      this.root = newNode;
    }
  }

  _searchNode(node: BinaryTree, key: any): boolean {
    if (!node) {
      return false;
    }
    if (node.key > key) {
      this._searchNode(node.left, key);
    } else if (node.key < key) {
      this._searchNode(node.right, key);
    } else {
      return true;
    }
    return false;
  }
  search(node: BinaryTree, key: any): any {
    this._searchNode(this.root, key);
  }

  _findMinNode(node: BinaryTree): TreeReturn {
    if (node) {
      while (node && node.left) {
        node = node.left;
      }
      return node;
    }
    return null;
  }
  _minNode(node: BinaryTree): BinaryTree | any {}
  min(): any {}

  _findMaxNode(node: BinaryTree): TreeReturn {
    return null;
  }
  _maxNode(node: BinaryTree): BinaryTree | any {}
  max(): any {}

  _removeNode(node: BinaryTree, key: any): TreeReturn {
    if (node === null) {
      return null;
    }
    if (node.key > key) {
      node.left = this._removeNode(node.left, key);
    } else if (node.key < key) {
      node.right = this._removeNode(node.right, key);
    } else {
      if (node.left === null && node.right === null) {
        // @ts-ignore
        node = null;
      }
      if (node.left === null) {
        node = node.right;
      }
      if (node.right === null) {
        node = node.left;
      }

      let aux: { key: any } | null = this._findMinNode(node.right);
      if (aux) {
        node.key = aux.key;
        node.right = this._removeNode(node.right, aux.key);
      }
    }
    return node;
  }
  remove(key: any) {
    this.root = this._removeNode(this.root, key);
  }

  _preOrderTraverseNode(
    node: BinaryTree,
    callback: WithParamsFunction | any
  ): void {
    if (node) {
      callback & callback(node.key);
      this._preOrderTraverseNode(node.left, callback);
      this._preOrderTraverseNode(node.right, callback);
    }
  }

  preOrderTraverse(callback: WithParamsFunction | any): void {
    this._preOrderTraverseNode(this.root, callback);
  }

  _inOrderTraverseNode(
    node: BinaryTree,
    callback: WithParamsFunction | any
  ): void {
    if (node) {
      this._inOrderTraverseNode(node.left, callback);
      callback & callback(node.key);
      this._inOrderTraverseNode(node.right, callback);
    }
  }
  inOrderTraverse(callback: WithParamsFunction | any): void {
    this._inOrderTraverseNode(this.root, callback);
  }

  _postOrderTraverseNode(
    node: BinaryTree,
    callback: WithParamsFunction | any
  ): void {
    if (node) {
      this._postOrderTraverseNode(node.left, callback);
      this._postOrderTraverseNode(node.right, callback);
      callback & callback(node.key);
    }
  }
  postOrderTraverse(callback: WithParamsFunction | any): void {
    this._postOrderTraverseNode(this.root, callback);
  }
}
