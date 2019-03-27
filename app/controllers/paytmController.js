const {
  initPayment,
  responsePayment,
} = require('./../middlewares/index');
const config = require('./../../Config/appConfig');

module.exports.initPayment = (req, res) => {
  initPayment(req.query.amount).then(
    (success) => {
      res.render('./../app/views/paytmRedirect.ejs', {
        resultData: success,
        paytmFinalUrl: config.PAYTM_FINAL_URL,
      });
    },
    (error) => {
      res.send(error);
    },
  );
};
module.exports.paywithpaytmresponse = (req, res) => {
  responsePayment(req.body).then(
    (success) => {
      res.render('./../app/views/response.ejs', { resultData: 'true', responseData: success });
    },
    (error) => {
      res.send(error);
    },
  );
};
