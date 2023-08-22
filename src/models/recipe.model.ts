import mongoose from "mongoose";


const recipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please provide a title"],
    },
    ingredients: {
        type: [String],
    },
    steps: {
        type: String,
        required: [true, "provide steps"],
        unique: true,
    },
    image: {
        type: String,
        default: "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    email: {
        type: String,
        required: [true, "Please provide a email"],
    },
})

const Recipe = mongoose.models.Recipes || mongoose.model("Recipes", recipeSchema);

export default Recipe;