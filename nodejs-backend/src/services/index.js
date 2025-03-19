
const products = require("./products/products.service.js");
const customers = require("./customers/customers.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
    
  app.configure(products);
  app.configure(customers);
    // ~cb-add-configure-service-name~
};
