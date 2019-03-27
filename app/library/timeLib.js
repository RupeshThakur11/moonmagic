
const moment = require('moment');

const now = () => {
  const date = moment();
  const timeStamp = date.format('Do MMM YYYY  hh:m:s a');
  return timeStamp;
};
// console.log(now());
module.exports = {
  now,
};
