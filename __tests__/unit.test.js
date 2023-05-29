// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2


test('Checks valid number', () => {
  expect(functions.isPhoneNumber('(821)932-9123')).toBe(true);
});
test('Checks valid number', () => {
  expect(functions.isPhoneNumber('(916)812-9246')).toBe(true);
});

test('Checks invalid number', () => {
  expect(functions.isPhoneNumber('12839284')).toBe(false);
});
test('Checks invalid number', () => {
  expect(functions.isPhoneNumber('8219329123923')).toBe(false);
});

test('Checks valid email', () => {
  expect(functions.isEmail('29d@gmail.com')).toBe(true);
});
test('Checks valid email', () => {
  expect(functions.isEmail('powell@ucsd.edu')).toBe(true);
});
test('Checks invalid email', () => {
  expect(functions.isEmail('bear@edu')).toBe(false);
});
test('Checks invalid email', () => {
  expect(functions.isEmail('google.com')).toBe(false);
});
test('Check strong password', () => {
  expect(functions.isStrongPassword('Qoiw_123_ap')).toBe(true);
});
test('Check strong password', () => {
  expect(functions.isStrongPassword('Powell_Ran29')).toBe(true);
});
test('Check weak password', () => {
  expect(functions.isStrongPassword('hi')).toBe(false);
});
test('Check weak password', () => {
  expect(functions.isStrongPassword('passpasspasspasspass')).toBe(false);
});

test('Check valid date', () => {
  expect(functions.isDate('1/2/2023')).toBe(true);
});
test('Check valid date', () => {
  expect(functions.isDate('02/28/2023')).toBe(true);
});
test('Check invalid date', () => {
  expect(functions.isDate('21/31/20223')).toBe(false);
});
test('Check invalid date', () => {
  expect(functions.isDate('123/2/2023')).toBe(false);
});

test('Check valid hex color', () => {
  expect(functions.isHexColor('#193')).toBe(true);
});
test('Check valid hex color', () => {
  expect(functions.isHexColor('#193E34')).toBe(true);
});
test('Check invalid hex color', () => {
  expect(functions.isHexColor('#193239a')).toBe(false);
});
test('Check invalid hex color', () => {
  expect(functions.isHexColor('#1933')).toBe(false);
});