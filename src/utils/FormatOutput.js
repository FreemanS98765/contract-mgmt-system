export const getFormattedDate = (val) => {
  // Converts date object to string
  if (Object.prototype.toString.call(val) === "[object Date]") {
    return `${val.getMonth() + 1}/${val.getDate()}/${val.getFullYear()}`;
  }

  return val;
};

export const getFormattedAmount = (amount) => `$${amount.toFixed(2)}`;
