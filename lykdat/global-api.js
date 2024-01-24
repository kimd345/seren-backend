/* eslint-disable @typescript-eslint/no-var-requires */
// using nodejs
var axios = require('axios');
var FormData = require('form-data');
var data = new FormData();
data.append(
  'api_key',
  'd1e2bc83ab6d09a79b2723e6900d59e331ae09228e7def441068825fb5cdb21c',
);
data.append(
  'image_url',
  'https://cdn.shopify.com/s/files/1/0293/9277/products/image.jpg',
);

var config = {
  method: 'post',
  url: 'https://cloudapi.lykdat.com/v1/global/search',
  data: data,
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
