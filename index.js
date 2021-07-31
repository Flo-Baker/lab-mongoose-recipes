const mongoose = require("mongoose");

// Import of the model Recipe from './models/Recipe.model.js'
const RecipeModel = require("./models/Recipe.model");
// Import of the data from './data.json'
const data = require("./data");

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(self => {
    console.log(`Connected to the database: "${self.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return RecipeModel.deleteMany()
  })
  .then(() => {
    console.log("title")
    // Run your code here, after you have insured that the connection was made
    return RecipeModel.create( { title: "", level: "", ingredients: "", cuisine: "", dishType: "", image: "", duration: 21, creator: "", created: 2021-07-31  } )

  })
  .catch(error => {
    console.error('Error connecting to the database', error);
  });
