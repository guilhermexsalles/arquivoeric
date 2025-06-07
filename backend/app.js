const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./swagger/swagger.json');
const db = require('./config/database');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', routes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Test connection to database and sync models
(async () => {
  try {
    await db.authenticate();
    console.log('Conexão com banco de dados bem-sucedida.');
    await db.sync();
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  }
})();

module.exports = app;
