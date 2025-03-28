//// [tests/cases/conformance/salsa/propertyAssignmentUseParentType1.ts] ////

//// [propertyAssignmentUseParentType1.ts]
interface N {
    (): boolean
    num: 123;
}
export const interfaced: N = () => true;
interfaced.num = 123;

export const inlined: { (): boolean; nun: 456 } = () => true;
inlined.nun = 456;

export const ignoreJsdoc = () => true;
/** @type {string} make sure to ignore jsdoc! */
ignoreJsdoc.extra = 111


//// [propertyAssignmentUseParentType1.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ignoreJsdoc = exports.inlined = exports.interfaced = void 0;
const interfaced = () => true;
exports.interfaced = interfaced;
exports.interfaced.num = 123;
const inlined = () => true;
exports.inlined = inlined;
exports.inlined.nun = 456;
const ignoreJsdoc = () => true;
exports.ignoreJsdoc = ignoreJsdoc;
/** @type {string} make sure to ignore jsdoc! */
exports.ignoreJsdoc.extra = 111;
