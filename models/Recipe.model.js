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
      enum: "Easy Peasy"
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
      enum: "main_course"
    },
    imnage: {
      type: String,
      enum: "https://images.media-allrecipes.com/images/75131.jpg"
    }, 
    duration: {
      type: Number
    }, 
    creator: {
      type: String
    }, 
    created: {
      type: Date,
      enum: 2021-07-31
    }
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
