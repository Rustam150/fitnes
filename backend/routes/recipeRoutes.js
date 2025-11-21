const express = require('express');
const router = express.Router();
const {
  getRecipes,
  getRecipesByCategory
} = require('../controllers/recipeController');

// Маршруты для рецептов
router.get('/', getRecipes);
router.get('/category/:category', getRecipesByCategory);

module.exports = router;