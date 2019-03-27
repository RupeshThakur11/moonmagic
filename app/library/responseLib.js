
const generate = (err, message, status, data) => {
  const response = {
    err,
    message,
    status,
    data,
  };
  return response;
};
module.exports = {
  generate,
};
