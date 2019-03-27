const appConfig = require('../../Config/appConfig');
const userController = require('./../controllers/userController');
const paytmController = require('./../controllers/paytmController');
const multiLevelPlansController = require('./../controllers/multiLevelPlansController.js');


const baseUrl = `${appConfig.apiVersion}/users`;
const basePaymentUrl = `${appConfig.apiVersion}/payments`;
const basePlanUrl = `${appConfig.apiVersion}/plan`;
module.exports.setRouter = (app) => {
  app.post(`${baseUrl}/signUp`, userController.signUp);
  app.post(`${baseUrl}/login`, userController.login);
  app.post(`${baseUrl}/forgotPassword`, userController.forgotPassword);
  // resetPassword
  app.get(`${baseUrl}/resetPassword/:email/:token`, userController.resetPassword);
  // enternew pass
  app.post(`${baseUrl}/newPass`, userController.newPassword);

  app.get(`${basePaymentUrl}/paywithpaytm`, paytmController.initPayment);

  app.post(`${basePaymentUrl}/paywithpaytmresponse`, paytmController.paywithpaytmresponse);

  app.get(`${basePlanUrl}/allPlans`, multiLevelPlansController.list);

  app.get(`${basePlanUrl}/singlePlan/:id`, multiLevelPlansController.show);

  app.post(`${basePlanUrl}/createPlan`, multiLevelPlansController.create);

  app.patch(`${basePlanUrl}/updatePlan/:id`, multiLevelPlansController.update);

  app.delete(`${basePlanUrl}/deletePlan/:id`, multiLevelPlansController.remove);

  app.post(`${basePlanUrl}/calculatePayout`, multiLevelPlansController.calculatePlans);
};
