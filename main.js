// User Authentication Validator

function validateEmail(email) {
  // Returns true if email format is valid
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePassword(password) {
  // Min 8 chars, 1 uppercase, 1 number
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
  return passwordRegex.test(password);
}

// Export for testing
module.exports = {
  validateEmail,
  validatePassword
};
