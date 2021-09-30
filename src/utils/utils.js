export const getFormattedDate = (val) => {
  // Converts date object to string
  if (Object.prototype.toString.call(val) === "[object Date]") {
    return `${val.getMonth() + 1}/${val.getDate()}/${val.getFullYear()}`;
  }

  return val;
};

export const getLongFormattedDate = (val) => {
  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  // Converts date object to string
  if (Object.prototype.toString.call(val) === "[object Date]") {
    return val.toLocaleString("en-US", options);
  }

  return val;
};

export const getMonthNames = (date) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return monthNames[date.getMonth()];
};

export const getFormattedPrice = (price) => {
  if (!price) return price;

  return `$${price.toFixed(2)}`;
};

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
};

export const getCreatedAt = (date) => {
  let currentTimestamp = Date.now();
  const minutes = (date - currentTimestamp) / 60000;
  const hours = minutes / 60;
  const days = hours / 24;
  const months = days / 12;

  if (minutes >= 60 && minutes < 1440) {
    return `${hours.toFixed(0)} hrs`;
  } else if (minutes >= 1440 && minutes < 43800) {
    return `${days.toFixed(0)} days`;
  } else if (minutes >= 43800) {
    return `${months.toFixed(0)} months`;
  } else {
    return "Just Now";
  }
};

const removeItemHandler = (id) => {};

export default removeItemHandler;
