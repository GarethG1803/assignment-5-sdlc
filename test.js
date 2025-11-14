const { validateEmail, validatePassword } = require('./main.js');

// Helper function for printing test results
function runTest(description, testFunc) {
  try {
    testFunc();
    console.log(`✔ PASS: ${description}`);
  } catch (error) {
    console.log(`✘ FAIL: ${description}`);
    console.error("   ", error.message);
  }
}

// VALID TESTS
runTest("Valid email should return true", () => {
  if (!validateEmail("user@example.com")) {
    throw new Error("Expected true for a valid email.");
  }
});

runTest("Valid strong password should return true", () => {
  if (!validatePassword("StrongPass1")) {
    throw new Error("Expected true for a strong password.");
  }
});

// INVALID TESTS
runTest("Invalid email without @ should return false", () => {
  if (validateEmail("userexample.com")) {
    throw new Error("Expected false for missing '@'");
  }
});

runTest("Weak password (no uppercase) should return false", () => {
  if (validatePassword("weakpassword1")) {
    throw new Error("Expected false for weak password.");
  }
});

runTest("Weak password (too short) should return false", () => {
  if (validatePassword("Aa1")) {
    throw new Error("Expected false for short password.");
  }
});

// BREAK TESTS (intentionally tricky)
runTest("Email with spaces should return false", () => {
  if (validateEmail("user name@example.com")) {
    throw new Error("Expected false for email with spaces.");
  }
});

runTest("Email with multiple @ symbols should return false", () => {
  if (validateEmail("user@@example.com")) {
    throw new Error("Expected false for double '@'");
  }
});

runTest("Password with symbols but no uppercase should return false", () => {
  if (validatePassword("password123!")) {
    throw new Error("Expected false for no uppercase.");
  }
});

runTest("Extremely long password still must pass rules", () => {
  const longPass = "A1".repeat(20); // still valid
  if (!validatePassword(longPass)) {
    throw new Error("Expected true for valid long password.");
  }
});
