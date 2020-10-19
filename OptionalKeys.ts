import {State} from "./State";

type DiffProperties<A, B> = {
  [K in keyof A & keyof B]: A[K] extends B[K] ? never : K
};

type OptionalKeys<T> = DiffProperties<T, Required<T>>[keyof T];

// No compilation errors
const bbb: OptionalKeys<State> = 'bbb';

// Has compilation errors
const aaa: OptionalKeys<State> = 'aaa';
const ccc: OptionalKeys<State> = 'ccc';
const ddd: OptionalKeys<State> = 'ddd';
