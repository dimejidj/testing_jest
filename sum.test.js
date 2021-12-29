const getting = require("./sum");

const sum = getting.sum;
const capitalise = getting.capitalise;
const reverseString = getting.reverseString;
const calculator = getting.calculator;
const ceasarCipher = getting.ceasarCipher;
const analyseArray = getting.analyseArray;

// Testing Sum Function
test("add 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

// Testing Capitalise Function
test("changing astronomy to Astronomy", () => {
  expect(capitalise("astronomy")).toBe("Astronomy");
});

test("changing balling to Balling", () => {
  expect(capitalise("balling")).toBe("Balling");
});

// Testing Reverse Function
test("reversing Breakfast", () => {
  expect(reverseString("Breakfast")).toBe("tsafkaerB");
});

// Testing Calculator Function
test("calculator functions with 10 & 2", () => {
  expect(calculator(10, 2)).toEqual({
    add: 12,
    subtract: 8,
    divide: 5,
    multiply: 20,
  });
});

// Testing Ceasar Cipher Function
test("CeasarCipher for decrpting a string with the shift number specified", () => {
  expect(ceasarCipher("attack at dawn", 5)).toBe("fyyfhp fy ifbs");
  expect(ceasarCipher("Welcome to my Castle BABY!", 10)).toBe(
    "Govmywo dy wi Mkcdvo LKLI!"
  );
});

// Testing AnalyseArray Function
test("Analysing array to return average, min, max and length", () => {
  expect(analyseArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
  expect();
});

// Check sum.js for functions!
