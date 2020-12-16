export function isValidEmail(value: string) {
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value);
}

export function isValueSupplied(value: string) {
  return value?.length > 0;
}

export function validateEmail(field: string, value: string, required: boolean = false) {
  if (required && !isValueSupplied(value))
    return `${field} Required`;
  if (!isValidEmail(value))
    return "Invalid Email Address";
  return '';
}
