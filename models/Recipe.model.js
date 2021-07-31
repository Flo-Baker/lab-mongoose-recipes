const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  // TODO: write the schema
    title: {
      type: String,
      required: true, 
      unique: true
    },
    level: {
      type: String,
      enum: ["Easy Peasy", "Amateur Chef", "UltraPro Chef"]
    }, 
    ingredients: [{
      type: String 
    }], 
    cuisine: {
      type: String,
      required: true
    }, 
    dishType: {
      type: String,
      enum: ["breakfast", "main_course", "soup", "snack", "drink", "dessert"]
    },
    image: {
      type: String,
      default: "https://images.media-allrecipes.com/images/75131.jpg"
    }, 
    duration: {
      type: Number
    }, 
    creator: {
      type: String
    }, 
    created: {
      type: Date,
      default: "2021-07-31"
    }
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
