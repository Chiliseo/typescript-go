//// [tests/cases/conformance/types/typeRelationships/bestCommonType/heterogeneousArrayLiterals.ts] ////

//// [heterogeneousArrayLiterals.ts]
// type of an array is the best common type of its elements (plus its contextual type if it exists)

var a = [1, '']; // {}[]
var b = [1, null]; // number[]
var c = [1, '', null]; // {}[]
var d = [{}, 1]; // {}[]
var e = [{}, Object]; // {}[]

var f = [[], [1]]; // number[][]
var g = [[1], ['']]; // {}[]

var h = [{ foo: 1, bar: '' }, { foo: 2 }]; // {foo: number}[]
var i = [{ foo: 1, bar: '' }, { foo: '' }]; // {}[]

var j = [() => 1, () => '']; // {}[]
var k = [() => 1, () => 1]; // { (): number }[]
var l = [() => 1, () => null]; // { (): any }[]
var m = [() => 1, () => '', () => null]; // { (): any }[]
var n = [[() => 1], [() => '']]; // {}[]

class Base { foo: string; }
class Derived extends Base { bar: string; }
class Derived2 extends Base { baz: string; }
var base: Base;
var derived: Derived;
var derived2: Derived2;

module Derived {
    var h = [{ foo: base, basear: derived }, { foo: base }]; // {foo: Base}[]
    var i = [{ foo: base, basear: derived }, { foo: derived }]; // {foo: Derived}[]

    var j = [() => base, () => derived]; // { {}: Base }
    var k = [() => base, () => 1]; // {}[]~
    var l = [() => base, () => null]; // { (): any }[]
    var m = [() => base, () => derived, () => null]; // { (): any }[]
    var n = [[() => base], [() => derived]]; // { (): Base }[]
    var o = [derived, derived2]; // {}[]
    var p = [derived, derived2, base]; // Base[]
    var q = [[() => derived2], [() => derived]]; // {}[]
}

module WithContextualType {
    // no errors
    var a: Base[] = [derived, derived2];
    var b: Derived[] = [null];
    var c: Derived[] = [];
    var d: { (): Base }[] = [() => derived, () => derived2];
}

function foo<T, U>(t: T, u: U) {
    var a = [t, t]; // T[]
    var b = [t, null]; // T[]
    var c = [t, u]; // {}[]
    var d = [t, 1]; // {}[]
    var e = [() => t, () => u]; // {}[]
    var f = [() => t, () => u, () => null]; // { (): any }[]
}

function foo2<T extends Base, U extends Derived>(t: T, u: U) {
    var a = [t, t]; // T[]
    var b = [t, null]; // T[]
    var c = [t, u]; // {}[]
    var d = [t, 1]; // {}[]
    var e = [() => t, () => u]; // {}[]
    var f = [() => t, () => u, () => null]; // { (): any }[]

    var g = [t, base]; // Base[]
    var h = [t, derived]; // Derived[]
    var i = [u, base]; // Base[]
    var j = [u, derived]; // Derived[]
}

function foo3<T extends Derived, U extends Derived>(t: T, u: U) {
    var a = [t, t]; // T[]
    var b = [t, null]; // T[]
    var c = [t, u]; // {}[]
    var d = [t, 1]; // {}[]
    var e = [() => t, () => u]; // {}[]
    var f = [() => t, () => u, () => null]; // { (): any }[]

    var g = [t, base]; // Base[]
    var h = [t, derived]; // Derived[]
    var i = [u, base]; // Base[]
    var j = [u, derived]; // Derived[]
}

function foo4<T extends Base, U extends Base>(t: T, u: U) {
    var a = [t, t]; // T[]
    var b = [t, null]; // T[]
    var c = [t, u]; // BUG 821629
    var d = [t, 1]; // {}[]
    var e = [() => t, () => u]; // {}[]
    var f = [() => t, () => u, () => null]; // { (): any }[]

    var g = [t, base]; // Base[]
    var h = [t, derived]; // Derived[]
    var i = [u, base]; // Base[]
    var j = [u, derived]; // Derived[]

    var k: Base[] = [t, u];
}

//function foo3<T extends U, U extends Derived>(t: T, u: U) {
//    var a = [t, t]; // T[]
//    var b = [t, null]; // T[]
//    var c = [t, u]; // {}[]
//    var d = [t, 1]; // {}[]
//    var e = [() => t, () => u]; // {}[]
//    var f = [() => t, () => u, () => null]; // { (): any }[]

//    var g = [t, base]; // Base[]
//    var h = [t, derived]; // Derived[]
//    var i = [u, base]; // Base[]
//    var j = [u, derived]; // Derived[]
//}

//function foo4<T extends U, U extends Base>(t: T, u: U) {
//    var a = [t, t]; // T[]
//    var b = [t, null]; // T[]
//    var c = [t, u]; // BUG 821629
//    var d = [t, 1]; // {}[]
//    var e = [() => t, () => u]; // {}[]
//    var f = [() => t, () => u, () => null]; // { (): any }[]

//    var g = [t, base]; // Base[]
//    var h = [t, derived]; // Derived[]
//    var i = [u, base]; // Base[]
//    var j = [u, derived]; // Derived[]

//    var k: Base[] = [t, u];
//}

//// [heterogeneousArrayLiterals.js]
// type of an array is the best common type of its elements (plus its contextual type if it exists)
var a = [1, '']; // {}[]
var b = [1, null]; // number[]
var c = [1, '', null]; // {}[]
var d = [{}, 1]; // {}[]
var e = [{}, Object]; // {}[]
var f = [[], [1]]; // number[][]
var g = [[1], ['']]; // {}[]
var h = [{ foo: 1, bar: '' }, { foo: 2 }]; // {foo: number}[]
var i = [{ foo: 1, bar: '' }, { foo: '' }]; // {}[]
var j = [() => 1, () => '']; // {}[]
var k = [() => 1, () => 1]; // { (): number }[]
var l = [() => 1, () => null]; // { (): any }[]
var m = [() => 1, () => '', () => null]; // { (): any }[]
var n = [[() => 1], [() => '']]; // {}[]
class Base {
    foo;
}
class Derived extends Base {
    bar;
}
class Derived2 extends Base {
    baz;
}
var base;
var derived;
var derived2;
(function (Derived) {
    var h = [{ foo: base, basear: derived }, { foo: base }]; // {foo: Base}[]
    var i = [{ foo: base, basear: derived }, { foo: derived }]; // {foo: Derived}[]
    var j = [() => base, () => derived]; // { {}: Base }
    var k = [() => base, () => 1]; // {}[]~
    var l = [() => base, () => null]; // { (): any }[]
    var m = [() => base, () => derived, () => null]; // { (): any }[]
    var n = [[() => base], [() => derived]]; // { (): Base }[]
    var o = [derived, derived2]; // {}[]
    var p = [derived, derived2, base]; // Base[]
    var q = [[() => derived2], [() => derived]]; // {}[]
})(Derived || (Derived = {}));
var WithContextualType;
(function (WithContextualType) {
    // no errors
    var a = [derived, derived2];
    var b = [null];
    var c = [];
    var d = [() => derived, () => derived2];
})(WithContextualType || (WithContextualType = {}));
function foo(t, u) {
    var a = [t, t]; // T[]
    var b = [t, null]; // T[]
    var c = [t, u]; // {}[]
    var d = [t, 1]; // {}[]
    var e = [() => t, () => u]; // {}[]
    var f = [() => t, () => u, () => null]; // { (): any }[]
}
function foo2(t, u) {
    var a = [t, t]; // T[]
    var b = [t, null]; // T[]
    var c = [t, u]; // {}[]
    var d = [t, 1]; // {}[]
    var e = [() => t, () => u]; // {}[]
    var f = [() => t, () => u, () => null]; // { (): any }[]
    var g = [t, base]; // Base[]
    var h = [t, derived]; // Derived[]
    var i = [u, base]; // Base[]
    var j = [u, derived]; // Derived[]
}
function foo3(t, u) {
    var a = [t, t]; // T[]
    var b = [t, null]; // T[]
    var c = [t, u]; // {}[]
    var d = [t, 1]; // {}[]
    var e = [() => t, () => u]; // {}[]
    var f = [() => t, () => u, () => null]; // { (): any }[]
    var g = [t, base]; // Base[]
    var h = [t, derived]; // Derived[]
    var i = [u, base]; // Base[]
    var j = [u, derived]; // Derived[]
}
function foo4(t, u) {
    var a = [t, t]; // T[]
    var b = [t, null]; // T[]
    var c = [t, u]; // BUG 821629
    var d = [t, 1]; // {}[]
    var e = [() => t, () => u]; // {}[]
    var f = [() => t, () => u, () => null]; // { (): any }[]
    var g = [t, base]; // Base[]
    var h = [t, derived]; // Derived[]
    var i = [u, base]; // Base[]
    var j = [u, derived]; // Derived[]
    var k = [t, u];
}
//function foo3<T extends U, U extends Derived>(t: T, u: U) {
//    var a = [t, t]; // T[]
//    var b = [t, null]; // T[]
//    var c = [t, u]; // {}[]
//    var d = [t, 1]; // {}[]
//    var e = [() => t, () => u]; // {}[]
//    var f = [() => t, () => u, () => null]; // { (): any }[]
//    var g = [t, base]; // Base[]
//    var h = [t, derived]; // Derived[]
//    var i = [u, base]; // Base[]
//    var j = [u, derived]; // Derived[]
//}
//function foo4<T extends U, U extends Base>(t: T, u: U) {
//    var a = [t, t]; // T[]
//    var b = [t, null]; // T[]
//    var c = [t, u]; // BUG 821629
//    var d = [t, 1]; // {}[]
//    var e = [() => t, () => u]; // {}[]
//    var f = [() => t, () => u, () => null]; // { (): any }[]
//    var g = [t, base]; // Base[]
//    var h = [t, derived]; // Derived[]
//    var i = [u, base]; // Base[]
//    var j = [u, derived]; // Derived[]
//    var k: Base[] = [t, u];
//}
