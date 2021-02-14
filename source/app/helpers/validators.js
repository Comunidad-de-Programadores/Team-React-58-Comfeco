export const isPasswordValid = (text) => /^.{4,12}$/.test(text);

export const isEmailValid = (text) => /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(text);

export const isPhoneValid = (phone) => /^\d{7,14}$/.test(phone);

export default {
  isPasswordValid,
  isEmailValid,
  isPhoneValid,
};
