const { add } = require('../src/calculator');

// test('should return 0 for an empty string', () => {
//     expect(add('')).toBe(0);
// });

// test('should return the number itself if only one number is provided', () => {
//     expect(add('1')).toBe(1);
// });
// test('should return the sum of two numbers separated by a comma', () => {
//     expect(add('1,5')).toBe(6);
// });

test('should return the sum with newlines between numbers', () => {
    expect(add('1\n2,3')).toBe(6);
});