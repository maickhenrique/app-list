const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../docs/swagger.json');

module.exports = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};
