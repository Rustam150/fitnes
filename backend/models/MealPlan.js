const mongoose = require('mongoose');

// Схема плана питания
const mealPlanSchema = new mongoose.Schema({
  weekStart: {
    type: Date,
    required: true
  },
  days: [{
    date: {
      type: Date,
      required: true
    },
    meals: {
      breakfast: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Recipe'
      },
      lunch: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Recipe'
      },
      dinner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Recipe'
      },
      snack: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Recipe'
      }
    }
  }],
  shoppingList: [{
    ingredient: {
      type: String,
      required: true
    },
    amount: {
      type: String,
      required: true
    },
    purchased: {
      type: Boolean,
      default: false
    }
  }]
}, {
  timestamps: true
});

const MealPlan = mongoose.model('MealPlan', mealPlanSchema);
module.exports = MealPlan;