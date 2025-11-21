const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database'); 
const recipeRoutes = require('./routes/recipeRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;


connectDB(); 

app.use(cors());
app.use(express.json());
app.use('/api/recipes', recipeRoutes);

app.get('/', (req, res) => {
    res.json({ 
        message: 'API Планировщика Питания работает!',
        database: 'MongoDB подключена!'
    });
});

app.listen(PORT, () => {
    console.log(`Сервер работает на порту ${PORT}`);
    console.log(`Проверьте: http://localhost:${PORT}`);
});