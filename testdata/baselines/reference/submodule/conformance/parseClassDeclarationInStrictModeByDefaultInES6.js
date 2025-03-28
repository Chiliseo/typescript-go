//// [tests/cases/conformance/es6/classDeclaration/parseClassDeclarationInStrictModeByDefaultInES6.ts] ////

//// [parseClassDeclarationInStrictModeByDefaultInES6.ts]
class C {
    interface = 10;
    public implements() { }
    public foo(arguments: any) { }
    private bar(eval:any) {
        arguments = "hello";
    }
}

//// [parseClassDeclarationInStrictModeByDefaultInES6.js]
class C {
    interface = 10;
    implements() { }
    foo(arguments) { }
    bar(eval) {
        arguments = "hello";
    }
}
