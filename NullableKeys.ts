import {State} from "./State";

type KeysOfType<T, U> = { [K in keyof T]: T[K] extends U ? K : never }[keyof T];
type RequiredKeys<T> = Exclude<KeysOfType<T, Exclude<T[keyof T], undefined | null>>, undefined | null>;
type NullableKeys<T> = Exclude<keyof T, RequiredKeys<T>>;

// No compilation errors
const bbb: NullableKeys<State> = 'bbb';
const ccc: NullableKeys<State> = 'ccc';
const ddd: NullableKeys<State> = 'ddd';

// Has compilation errors
const aaa: NullableKeys<State> = 'aaa';

