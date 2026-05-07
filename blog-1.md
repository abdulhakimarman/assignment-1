# Why is any a "Type Safety Hole"? and the Necessity of unknown...!

In TypeScript, using `any` means completely disabling the type-checking system for that specific variable. It is referred to as a "type safety hole" because it prevents the compiler from catching errors, which can lead to unexpected crashes during runtime.

On the other hand, `unknown` is a safer alternative to `any`. It indicates that we do not yet know the specific type of the data. Therefore, before performing any operations on it, we must perform Type Narrowing.

**Type Narrowing**
This is a process where we refine a broad type into a more specific one using mechanisms like `typeof`, `instanceof`, or custom Type Guards.

_Example:_

```typescript
function dataType(data: unknown) {
  if (typeof data === "string") {
    return data;
  } else if (typeof data === "number") {
    return data;
  }
}
```
