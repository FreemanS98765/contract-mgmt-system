export const getFormattedDate = (val) => {
  // Converts date object to string
  if (Object.prototype.toString.call(val) === "[object Date]") {
    return `${val.getMonth() + 1}/${val.getDate()}/${val.getFullYear()}`;
  }

  return val;
};

export const getFormattedPrice = (price) => `$${price.toFixed(2)}`;

export const formatPrice = (x, currency) => {
  switch (currency) {
    case "USD":
      return x.toFixed(2).replace(".", ",");
    default:
      return x.toFixed(2);
  }
};

const removeContractHandler = (id) => {};

export default removeContractHandler;
