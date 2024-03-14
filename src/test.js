import DefaultApi from psrestful;

let api = new DefaultApi()
let callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getServiceCodes(callback);
