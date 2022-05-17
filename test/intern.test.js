const Intern = require("../lib/intern");

test("Set school via constructor", () => {
  const testValue = "UTA";
  const e = new Intern("Max", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test('getRole() should return "Intern"', () => {
  const testValue = "Intern";
  const e = new Intern("Max", 1, "test@test.com", "UTA");
  expect(e.getRole()).toBe(testValue);
});

test("Get school via getSchool()", () => {
  const testValue = "UTA";
  const e = new Intern("Max", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});