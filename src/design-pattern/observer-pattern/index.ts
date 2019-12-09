/*
 * @Author: Rainy
 * @Date: 2019-11-14 19:25:01
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-12-09 22:30:14
 */

class Subject {
  state: any;

  observers: Observer[];

  constructor() {
    this.state = 0;
    this.observers = [];
  }

  getState(): any {
    return this.state;
  }

  setState(state: any): void {
    this.state = state;
    this.notify();
  }

  notify() {
    this.observers.forEach(observer => {
      observer.update();
    })
  }

  attach(observer: Observer): void {
    this.observers.push(observer);
  }
}

class Observer {
  name: string;
  subject: Subject;

  constructor(name: string, subject: Subject) {
    this.name = name;
    this.subject = subject;
    this.subject.attach(this);
  }
  update() {
    console.log(`update: ${this.name}, state: ${this.subject.state}`);
  }
}
