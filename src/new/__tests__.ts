/*
 * @Author: Rainy
 * @Date: 2019-11-14 19:25:01
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-11-17 22:07:06
 */
import { _new } from '.';

function profile_without_return(this: any, name: string, age: number): void {
    this.name = name;
    this.age = age;
}

function profile_with_return(this: any, name: string, age: number): object {
    this.name = name;
    this.age = age;

    return {};
}

let pwor = _new(profile_without_return, 'rainy', 23);

test(`_new profile_without_return should { name: 'rainy', age: 23 }`, () => {
    expect(pwor).toEqual({ name: 'rainy', age: 23 });
});

test('pwor instanceof profile_with_return should true', () => {
    expect(pwor instanceof profile_without_return).toBe(true);
});


let pwr = _new(profile_with_return, 'rainy', 23);

test('_new profile_with_return should {}', () => {
    expect(pwr).toEqual({});
});

test('pwr instanceof profile_with_return should false', () => {
    expect(pwr instanceof profile_with_return).toBe(false);
});
