const mongoose = require('mongoose');

// Схема рецепта - определяет структуру данных для рецептов
const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Название рецепта обязательно'],
    trim: true
  },
  category: {
    type: String,
    required: true,
    enum: ['breakfast', 'lunch', 'dinner', 'snack']
  },
  ingredients: [{
    name: {
      type: String,
      required: true
    },
    amount: {
      type: String,
      required: true
    }
  }],
  instructions: {
    type: String,
    required: true
  },
  cookingTime: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    default: ''
  }
}, {
  timestamps: true
});

// Создаем модель на основе схемы
const Recipe = mongoose.model('Recipe', recipeSchema);

// Экспортируем модель
module.exports = Recipe;