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
    console.log(`1. Connected to the database: "${self.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    // return mongoose.connection.dropDatabase();
    return RecipeModel.deleteMany()

  })
  .then(() => {
    console.log("2. Database cleared")
    return RecipeModel.insertMany( data )
    // Run your code here, after you have insured that the connection was made
  })
  .then(response => {
    console.log("3. inserted recipe data", response)
    // forEach.data.title
    response.forEach(eachRecipe => {
      console.log(eachRecipe.title)
    })
    return RecipeModel.findOneAndUpdate ( { title: "Rigatoni alla Genovese" }, { duration: 100 }, {new: true} )
  })
  .then(() => {
    console.log("4. updated duration of Rigatoni alla Genovese")

    return RecipeModel.deleteOne ( { title: "Carrot Cake" } )
  })
  .then( (recipeModel) => {
    console.log("5. deleted Carrot Cake")
  })
  // return RecipeModel.create( { title: "", level: "", ingredients: "", cuisine: "", dishType: "", image: "", duration: 21, creator: "", created: 2021-07-31  } )
  /*.then(response => {
    console.log("recipe created", response)
  })
  */  
 .catch(error => {
    console.error('Error connecting to the database', error);
  });

  mongoose.connection.close()
  .then(res => {
    console.log("Connection closed");
  })
  .catch(err => {
    console.log(err);
  })