const fb = require("../fizzbuzz");

// Challenge 1
// Write a test for each of the constants. Equal to string namesakes

test('FIZZ', () => {
  expect(fb.FIZZ).toBe("fizz");
});

test('BUZZ', () => {
  expect(fb.BUZZ).toBe("buzz");
});

test('FIZZBUZZ', () => {
  expect(fb.FIZZBUZZ).toBe("fizzbuzz");
});

// Challenge 2
// isFizzy(n) function | Takes a number and returns true if the number is divisible by 3.

test("isFizzy", () => {
    const outcome = fb.isFizzy(3, fb.forFizz)
    expect(outcome).toBe(true)
});

// Challenge 3
// Function takes n as a parameter and returns true if the number is divisible by 5

test('isBuzzy', () => {
    const outcome = fb.isBuzzy(5, fb.forBuzz)
    expect(outcome).toBe(true)
});

// Challenge 4
// Function takes the parameter n and returns a string, 'fizz' if n is divisble by 3, 'buzz' if n is divisble by 5, and fizzbuzz if divisible by both 3 and 5

test("fizzyBuzzy returns correct strings", () => {
    const firstOutput = fb.fizzyBuzzy(3)
    const secondOutput = fb.fizzyBuzzy(5)
    const thirdOutput = fb.fizzyBuzzy(15)

    expect(firstOutput).toBe(fb.FIZZ)
    expect(secondOutput).toBe(fb.BUZZ)
    expect(thirdOutput).toBe(fb.FIZZBUZZ)
});

// Challenge 5
//F unction takes a number count and returns an object with details about the fizzy and buzziness of the count

test("fizzBuzz returns correct object", () => {
  const result = fb.fizzBuzz(100)
  expect(result).toEqual({ count: 100, fizz: 27, buzz: 14, fizzBuzz: 6 })
  const secondResult = fb.fizzBuzz(100)
  expect(secondResult).toEqual({ count: 100, fizz: 27, buzz: 14, fizzBuzz: 6 })
});