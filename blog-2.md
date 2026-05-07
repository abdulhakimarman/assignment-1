# Generics: Reusable and Type-Safe Code

## Introduction

In large-scale projects, we often need functions or components that can work with various types of data. Generics provide that flexibility by allowing us to pass a type as a "variable" instead of hardcoding it.

## Why should we use Generics?

By using Generics, TypeScript can track the internal type of the data, regardless of the underlying data structure. This ensures type safety while maintaining the reusability of the code.

_Example_

```typescript
function wrapInArray<T>(value: T): T[] {
  return [value];
}

const stringArray = wrapInArray<string>("Hello");
const numberArray = wrapInArray<number>(100);
```
