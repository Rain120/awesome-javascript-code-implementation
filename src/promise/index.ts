/*
 * @Author: Rainy
 * @Date: 2019-11-14 19:25:01
 * @LastEditors: Rainy
 * @LastEditTime: 2020-03-05 09:38:05
 */

import { AnyFunction, WithParamsReturnAnyFunction, ArrayMap } from 'types';
import { isAbsType } from 'utils/type';

export interface MyPromise {}

export class MyPromise {
  readonly FULFILLED: string = 'Fulfilled';
  readonly PENDING: string = 'pending';
  readonly REJECTED: string = 'Rejected';

  state: string = this.PENDING;
  value: any = null;
  reason: any = null;
  onFulfilledCallback: ArrayMap<WithParamsReturnAnyFunction> = [];
  onRejectedCallback: ArrayMap<WithParamsReturnAnyFunction> = [];

  constructor(executor: WithParamsReturnAnyFunction) {
    this.initBind();
    try {
      executor(this.resolve, this.reject);
    } catch (error) {
      this.reject(error);
    }
  }

  initBind() {
    this.resolve = this.resolve.bind(this);
    this.reject = this.reject.bind(this);
  }

  resolve(value: any): void {
    if (this.state === this.PENDING) {
      setTimeout(() => {
        this.state = this.FULFILLED;
        this.value = value;
        this.onFulfilledCallback.forEach((cb: WithParamsReturnAnyFunction) => {
          cb && cb(this.value);
        });
      });
    }
  }

  reject(reason: any): void {
    if (this.state === this.PENDING) {
      setTimeout(() => {
        this.state = this.REJECTED;
        this.reason = reason;
        this.onRejectedCallback.forEach((cb: WithParamsReturnAnyFunction) => {
          cb && cb(this.reason);
        });
      });
    }
  }

  then(
    onFulfilled?: WithParamsReturnAnyFunction,
    onRejected?: WithParamsReturnAnyFunction
  ) {
    onFulfilled =
      typeof onFulfilled === 'function' ? onFulfilled : value => value;
    onRejected =
      typeof onRejected === 'function'
        ? onRejected
        : err => {
            throw err;
          };

    let promise2 = new MyPromise(
      (
        resolve: WithParamsReturnAnyFunction,
        reject: WithParamsReturnAnyFunction
      ) => {
        if (this.state === this.FULFILLED) {
          setTimeout(() => {
            if (onFulfilled && onRejected) {
              const x = this.tryCall(this.value, onFulfilled, onRejected);
              this.resolvePromise(promise2, x, resolve, reject);
            }
          });
        }

        if (this.state === this.REJECTED) {
          setTimeout(() => {
            if (onRejected) {
              const x = this.tryCall(this.reason, onRejected, onRejected);
              this.resolvePromise(promise2, x, resolve, reject);
            }
          });
        }

        if (this.state === this.PENDING) {
          this.onFulfilledCallback.push(value => {
            if (onFulfilled && onRejected) {
              const x = this.tryCall(value, onFulfilled, onRejected);
              this.resolvePromise(promise2, x, resolve, reject);
            }
          });

          this.onRejectedCallback.push(reason => {
            onRejected && this.tryCall(reason, onRejected, onRejected);
            if (onRejected) {
              const x = this.tryCall(reason, onRejected, onRejected);
              this.resolvePromise(promise2, x, resolve, reject);
            }
          });
        }
      }
    );
    return promise2;
  }

  private tryCall(
    value: any,
    resolve: WithParamsReturnAnyFunction,
    reject: WithParamsReturnAnyFunction
  ) {
    let x: any = null;
    try {
      x = resolve(value);
    } catch (error) {
      x = reject(error);
    }
    return x;
  }

  // Promise 解决链式调用过程
  private resolvePromise(
    promise2: MyPromise,
    x: any,
    resolve: WithParamsReturnAnyFunction,
    reject: WithParamsReturnAnyFunction
  ) {
    if (promise2 === x) {
      throw new Error('Chaining cycle detected for promise #<MyPromise>');
    }
    let called: boolean = false;
    if (x instanceof MyPromise) {
      const then = x.then;
      if (x.state === this.PENDING) {
        then.call(
          x,
          y => this.resolvePromise(promise2, y, resolve, reject),
          reason => reject(reason)
        );
      } else {
        then(resolve, reject);
      }
    } else if (isAbsType(x) === 'function' || isAbsType(x) === 'object') {
      try {
        const then = x.then;
        if (isAbsType(x) === 'function') {
          then.call(
            x,
            (y: any) => {
              if (called) {
                return;
              }
              called = true;
              this.resolvePromise(promise2, y, resolve, reject);
            },
            (reason: any) => {
              if (called) {
                return;
              }
              called = true;
              reject(reason);
            }
          );
        } else {
          resolve(x);
        }
      } catch (err) {
        if (called) {
          return;
        }
        called = true;
        reject(err);
      }
    } else {
      resolve(x);
    }
  }
}

// Method: resolve reject race all

(MyPromise as any).resolve = (value: any) => {
  return new MyPromise((resolve, reject) => {
    resolve(value);
  });
};

(MyPromise as any).reject = (value: any) => {
  return new MyPromise((resolve, reject) => {
    reject(value);
  });
};

(MyPromise as any).race = (promises: ArrayMap<MyPromise>) => {
  return new MyPromise((resolve, reject) => {
    promises.forEach((promise: any, index: number) => {
      promise.then(resolve, reject);
    });
  });
};

(MyPromise as any).all = (promises: ArrayMap<MyPromise>) => {
  let promiseArr: ArrayMap<any> = [];
  return new MyPromise((resolve, reject) => {
    promises.forEach((promise: any, index: number) => {
      promise.then((data: any) => {
        promiseArr[index] = data;
        if (index + 1 === promises.length) {
          resolve(promiseArr);
        }
      }, reject);
    });
  });
};

// prototype Method: done finally catch

(MyPromise as any).prototype.done = (
  onFulfilled: WithParamsReturnAnyFunction,
  onRejected: WithParamsReturnAnyFunction
) => {
  // @ts-ignore
  return this.then(onFulfilled, onRejected).catch(error => {
    setTimeout(() => {
      throw error;
    });
  });
};

(MyPromise as any).prototype.finally = (onFinally: AnyFunction) => {
  // @ts-ignore
  return this.then(
    (value: any) => (MyPromise as any).resolve(onFinally()).then(() => value),
    (error: any) =>
      (MyPromise as any).resolve(onFinally()).then(() => {
        throw error;
      })
  );
};

(MyPromise as any).prototype.catch = (
  onRejected: WithParamsReturnAnyFunction
) => {
  // @ts-ignore
  return this.then(void 0, onRejected);
};

// npx promises-aplus-tests index.ts -> ts 文件如何测试？？？
(MyPromise as any).deferred = function() {
  const dfd: any = {};
  dfd.promise = new MyPromise((resolve, reject) => {
    dfd.resolve = resolve;
    dfd.reject = reject;
  });
  return dfd;
};
