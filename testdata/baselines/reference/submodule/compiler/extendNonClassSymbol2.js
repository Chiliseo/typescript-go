//// [tests/cases/compiler/extendNonClassSymbol2.ts] ////

//// [extendNonClassSymbol2.ts]
function Foo() {
   this.x = 1;
}
var x = new Foo(); // legal, considered a constructor function
class C extends Foo {} // error, could not find symbol Foo

//// [extendNonClassSymbol2.js]
function Foo() {
    this.x = 1;
}
var x = new Foo(); // legal, considered a constructor function
class C extends Foo {
} // error, could not find symbol Foo
