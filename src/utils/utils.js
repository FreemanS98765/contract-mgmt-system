export const getFormattedDate = (val) => {
  // Converts date object to string
  if (Object.prototype.toString.call(val) === "[object Date]") {
    return `${val.getMonth() + 1}/${val.getDate()}/${val.getFullYear()}`;
  }

  return val;
};

export const getFormattedPrice = (price) => {
  if (!price) return price;

  return `$${price.toFixed(2)}`;
}

export const formatPrice = (x, currency) => {
  switch (currency) {
    case "USD":
      return x.toFixed(2).replace(".", ",");
    default:
      return x.toFixed(2);
  }
};

export const formatPhoneNumber = (value) => {
  if (!value) return value;

  const phoneRegex =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const phoneNumber = value.toString().replace(/[^\d]/g, "");

  const phoneNumberLength = phoneNumber.length;

  if (phoneNumberLength < 4) return phoneNumber;

  if (phoneNumberLength < 7) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  }

  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
    3,
    6
  )}-${phoneNumber.slice(6, 10)}`;
};

export const getFormattedPhone = (phone) => {
  const formattedInputValue = formatPhoneNumber(phone);
};

export const checkIfEmpty = (data) => {
  if (data) {
    return data;
  }

  return data ? data : "Nothing found";
}

const removeContractHandler = (id) => {};

export default removeContractHandler;
