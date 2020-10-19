TypeScript Typing Optional vs Nullable Properties Demo
===========================

在typescript中，下面两种情况在类型上实际上是不完全等价的：

```
type SomeType = {
  aaa?: string,
  bbb: string | undefined
}
```

如果再加上`null`，会更复杂一些。

我们通过两个例子来分别展示，需要在IDE中看查编译期错误。


```
npm install
```
