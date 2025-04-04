//// [tests/cases/conformance/types/members/augmentedTypeBracketAccessIndexSignature.ts] ////

//// [augmentedTypeBracketAccessIndexSignature.ts]
interface Foo { a }
interface Bar { b }

interface Object {
    [n: number]: Foo;
}

interface Function {
    [n: number]: Bar;
}

var a = {}[0]; // Should be Foo
var b = (() => { })[0]; // Should be Bar

//// [augmentedTypeBracketAccessIndexSignature.js]
var a = {}[0]; // Should be Foo
var b = (() => { })[0]; // Should be Bar
