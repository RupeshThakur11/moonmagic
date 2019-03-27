

const Email = (email) => {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.match(emailRegex)) {
    return true;
  }
  return false;
};
const Password = (password) => {
  const passRegex = /\w{6,}/;
  if (password.match(passRegex)) {
    return true;
  }
  return false;
};

module.exports = {
  Email,
  Password,
};
