export const capitalizeString = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const parseHttpErrorMessage = (error) => {
  const message = error.response.data;
  if (message) {
    return message;
  }
};

export const generateErrorMessage = (error) => {
  const message = parseHttpErrorMessage(error);
  return message
    ? `Error: ${capitalizeString(message)}.`
    : "Something went wrong.";
};
