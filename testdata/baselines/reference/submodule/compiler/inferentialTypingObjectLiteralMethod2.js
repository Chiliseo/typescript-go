//// [tests/cases/compiler/inferentialTypingObjectLiteralMethod2.ts] ////

//// [inferentialTypingObjectLiteralMethod2.ts]
interface Int<T, U> {
    [s: string]: (x: T) => U;
}
declare function foo<T, U>(x: T, y: Int<T, U>, z: Int<U, T>): T;
foo("", { method(p1) { return p1.length } }, { method(p2) { return undefined } });

//// [inferentialTypingObjectLiteralMethod2.js]
foo("", { method(p1) { return p1.length; } }, { method(p2) { return undefined; } });
