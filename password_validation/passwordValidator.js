export function validatePassword(password) {
  const lengthCriteria = password.length >= 15;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasDigit = /\d/.test(password);
  const hasSpecial = /[!$#%&*]/.test(password);

  const categories = [hasUppercase, hasLowercase, hasDigit, hasSpecial].filter(
    Boolean
  ).length;
  const categoryCriteria = categories >= 2;

  return lengthCriteria && categoryCriteria;
}
