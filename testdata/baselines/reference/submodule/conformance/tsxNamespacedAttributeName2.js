//// [tests/cases/conformance/jsx/tsxNamespacedAttributeName2.tsx] ////

//// [a.tsx]
declare var React: any;

const a = <svg:path a:b={1}></svg:path>;
const b = <svg : path a:b={1}></svg : path>;


//// [a.js]
const a = <svg:path a:b={1}></svg:path>;
const b = <svg:path a:b={1}></svg:path>;
