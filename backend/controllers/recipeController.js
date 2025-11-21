const Recipe = require('../models/Recipe');

// Получить все рецепты
const getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find({});
    res.json({
      success: true,
      count: recipes.length,
      data: recipes
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Ошибка при получении рецептов',
      error: error.message
    });
  }
};

// Получить рецепты по категории
const getRecipesByCategory = async (req, res) => {
  try {
    const category = req.params.category;
    const recipes = await Recipe.find({ category: category });
    
    res.json({
      success: true,
      category: category,
      count: recipes.length,
      data: recipes
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Ошибка при получении рецептов по категории',
      error: error.message
    });
  }
};

module.exports = {
  getRecipes,
  getRecipesByCategory
};