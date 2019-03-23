let appConfig = {};

appConfig.port = process.env.port || 3000;
appConfig.allowedCorsOrigin = "*";
appConfig.env = "dev";
appConfig.password = process.env.PASSWORD || 'DEFAULT';
appConfig.db = {
    url: 'mongodb://moonmagic:moon123@ds145563.mlab.com:45563/moonmagic'
}
appConfig.apiVersion = '/api/v1';


module.exports = {
    port: appConfig.port,
    allowedCorsOrigin: appConfig.allowedCorsOrigin,
    environment: appConfig.env,
    db: appConfig.db,
    password: appConfig.password,
    apiVersion: appConfig.apiVersion,
    MID: 'edXAmb64701532521060',
  	PAYTM_MERCHANT_KEY: '7AlP6nyiUfIeGvma',
  	PAYTM_FINAL_URL: 'https://securegw-stage.paytm.in/theia/processTransaction',
  	WEBSITE: 'WEBSTAGING',
  	CHANNEL_ID: 'WEB',
  	INDUSTRY_TYPE_ID: 'Retail',
  	CALLBACK_URL: 'http://localhost:3000/api/v1/payments/paywithpaytmresponse',
};