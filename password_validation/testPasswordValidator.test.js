import { validatePassword } from "./passwordValidator";

test("Valid passwords", () => {
  expect(validatePassword("Fxmedia12345678@")).toBe(true);
  expect(validatePassword("AnotherSecurePwd$567")).toBe(true);
  expect(validatePassword("SuperP@ssphrase123")).toBe(true);
});

test("Invalid passwords", () => {
  expect(validatePassword("ShortPwd1!")).toBe(false);
  expect(validatePassword("Password")).toBe(false);
  expect(validatePassword("lowercaseonly")).toBe(false);
  expect(validatePassword("MISSINGUPPERANDSPECIAL")).toBe(false);
});
