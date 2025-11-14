const { validateEmail, validatePassword } = require('./main.js');

function runTest(description, testFunc) {
  try {
    testFunc();
    console.log(`✔ PASS: ${description}`);
  } catch (error) {
    console.log(`✘ FAIL: ${description}`);
    console.error("   ", error.message);
  }
}

console.log("\n=== EMAIL TESTS ===");

// EMAIL – VALID CASES (2)
runTest("Valid email: user@example.com", () => {
  if (!validateEmail("user@example.com")) {
    throw new Error("Expected valid email.");
  }
});

runTest("Valid email: hello.world@test.co", () => {
  if (!validateEmail("hello.world@test.co")) {
    throw new Error("Expected valid email.");
  }
});

// EMAIL – INVALID CASES (2)
runTest("Invalid email: missing @ symbol", () => {
  if (validateEmail("userexample.com")) {
    throw new Error("Expected invalid email.");
  }
});

runTest("Invalid email: no domain", () => {
  if (validateEmail("user@")) {
    throw new Error("Expected invalid email.");
  }
});

// EMAIL – INTENTIONAL FAIL (1)
runTest("INTENTIONAL FAIL (Email): expect false but validator returns true", () => {
  if (validateEmail("test@example.com")) {
    throw new Error("INTENTIONAL FAILURE triggered!");
  }
});


console.log("\n=== PASSWORD TESTS ===");

// PASSWORD – VALID CASES (2)
runTest("Valid password: StrongPass1", () => {
  if (!validatePassword("StrongPass1")) {
    throw new Error("Expected valid password.");
  }
});

runTest("Valid password: Abcd1234", () => {
  if (!validatePassword("Abcd1234")) {
    throw new Error("Expected valid password.");
  }
});

// PASSWORD – INVALID CASES (2)
runTest("Invalid password: no uppercase letter", () => {
  if (validatePassword("password123")) {
    throw new Error("Expected invalid password.");
  }
});

runTest("Invalid password: too short", () => {
  if (validatePassword("A1b")) {
    throw new Error("Expected invalid password.");
  }
});

// PASSWORD – INTENTIONAL FAIL (1)
runTest("INTENTIONAL FAIL (Password): intentionally wrong expectation", () => {
  if (validatePassword("GoodPass1")) {
    throw new Error("INTENTIONAL FAILURE triggered!");
  }
});
