const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const sequelize = require('./models');
const taskRoutes = require('./routes/tasks');
const setupSwagger = require('./config/swagger');

dotenv.config();
const app = express();
app.use(bodyParser.json());


// Configurar rotas
app.use('/tasks', taskRoutes);

// Configurar Swagger
setupSwagger(app);

// Sincronizar banco de dados
sequelize.sync({ force: false }).then(() => {
  console.log('Banco sincronizado!');
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
