const mongoose = require('mongoose');
const Recipe = require('./Recipe.js');
require('dotenv').config();

// Массив начальных рецептов на русском
const initialRecipes = [
  {
    name: "Овсяная каша с ягодами",
    category: "breakfast",
    ingredients: [
      { name: "Овсяные хлопья", amount: "100 г" },
      { name: "Молоко", amount: "200 мл" },
      { name: "Мед", amount: "2 ст. ложки" },
      { name: "Смесь ягод", amount: "горсть" }
    ],
    instructions: "1. Довести молоко до кипения\n2. Добавить овсяные хлопья\n3. Варить 5-7 минут\n4. Добавить мед и ягоды",
    cookingTime: 10,
    image: ""
  },
  {
    name: "Омлет с овощами",
    category: "breakfast", 
    ingredients: [
      { name: "Яйца", amount: "3 шт" },
      { name: "Помидор", amount: "1 шт" },
      { name: "Перец болгарский", amount: "1/2 шт" },
      { name: "Зелень", amount: "по вкусу" },
      { name: "Соль", amount: "щепотка" }
    ],
    instructions: "1. Взбить яйца с солью\n2. Нарезать овощи кубиками\n3. Обжарить овощи 3 минуты\n4. Залить яйцами и жарить до готовности",
    cookingTime: 15,
    image: ""
  }
  // Можно добавить остальные рецепты позже
];

// Функция для добавления рецептов в базу
const seedRecipes = async () => {
  try {
    // ПОДКЛЮЧАЕМСЯ К БАЗЕ ДАННЫХ
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    console.log('✅ Подключение к MongoDB установлено');

    // Очищаем существующие рецепты
    await Recipe.deleteMany({});
    console.log('✅ Старые рецепты удалены');
    
    // Добавляем новые рецепты
    await Recipe.insertMany(initialRecipes);
    
    console.log('✅ Начальные рецепты успешно добавлены в базу!');
    console.log(`📊 Добавлено рецептов: ${initialRecipes.length}`);
    
    // Закрываем соединение
    await mongoose.connection.close();
    console.log('✅ Соединение с базой закрыто');
    
  } catch (error) {
    console.error('❌ Ошибка при добавлении рецептов:', error);
    process.exit(1);
  }
};

// Запускаем функцию
seedRecipes();