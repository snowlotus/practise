/*
 * Author:snowdrop
 * Date: 2019-04-09
 * Desc: 常用的数据类型检测方法
 */


/**
 * Returns if a value is a string
 * @param {*} value
 * @returns Boolean true|false
 */
function isString(value) {
  return typeof value === 'string' || value instanceof String;
}

/**
 * Returns if a value is really a number
 * @param {*} value
 * @returns Boolean true|false
 */
function isNumber(value) {
  return typeof value === 'number' && isFinite(value);
}

/**
 * Returns if a value is an array
 * @param {*} value
 * @returns Boolean true|false
 */
function isArray(value) {
  return value && typeof value === 'object' && value.constructor === Array;
}

/**
 * Returns if a value is an Function
 * @param {*} value
 * @returns Boolean true|false
 */
function isFunction(value) {
  return typeof value === 'function';
}

/**
 * Returns if a value is an Object
 * @param {*} value
 * @returns Boolean true|false
 */
function isObject(value) {
  return value && typeof value === 'object' && value.constructor === Object;
}

/**
 * Returns if a value is null
 * @param {*} value
 * @returns Boolean true|false
 */
function isNull(value) {
  return value === null;
}

/**
 * Returns if a value is undefined
 * @param {*} value
 * @returns Boolean true|false
 */
function isUndefined(value) {
  return typeof value === 'undefined';
}

/**
 * Returns if a value is boolean
 * @param {*} value
 * @returns {Boolean} true|false
 */
function isBoolean(value) {
  return typeof value === 'boolean';
}


/**
 * Returns if a value is regexp
 * @param {*} value
 * @returns {Boolean} true|false
 */
function isRegExp(value) {
  return value && typeof value === 'object' && value.constructor === RegExp;
}


/**
 * Returns if a value is a date object
 * @param {*} value
 * @returns {Boolean} true|false
 */
function isDate(value) {
  return value instanceof Date;
}

// console.log(isNumber('123'))
// console.log(isNumber(-1))
export {
  isString,
  isNumber,
  isArray,
  isFunction,
  isObject,
  isNull,
  isUndefined,
  isBoolean,
  isRegExp,
  isDate
}