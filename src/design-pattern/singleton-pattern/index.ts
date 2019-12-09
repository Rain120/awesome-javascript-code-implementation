/*
 * @Author: Rainy
 * @Date: 2019-11-14 19:25:01
 * @LastEditors: Rainy
 * @LastEditTime: 2019-12-09 19:49:36
 */

class SingleObject {
    showMessage(): string {
        return '';
    }
}

// @ts-ignore
SingleObject.getInstance = (() => {
    let _instance = null;
    if (_instance === null) {
        _instance = new SingleObject();
    }
    return _instance;
})();

class Singleton {
    private _instance: SingleObject | null;

    constructor() {
        this._instance = null;
    }

    getInstance(): SingleObject {
        if (!this._instance) {
            this._instance = new SingleObject();
        }
        return this._instance;
    }
}
