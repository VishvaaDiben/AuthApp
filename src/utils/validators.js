export const validateRequired = (value, fieldName) => {
  if (!value || value.trim() === "") {
    return `${fieldName} is required`;
  }
  return null;
};

export const validateEmail = (email) => {
  const regex = /\S+@\S+\.\S+/;
  if (!email) return "Email is required";
  if (!regex.test(email)) return "Invalid email format";
  return null;
};

export const validatePassword = (password, minLength = 6) => {
  if (!password) return "Password is required";
  if (password.length < minLength) {
    return `Password must be at least ${minLength} characters`;
  }
  return null;
};
