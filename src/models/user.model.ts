import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a username"],
    },
    email: {
        type: String,
        required: [true, "Please provide a email"],
        unique: true,
    },
    picture: {
        type: String,
        required: [true, "Please provide a picture"],
    }
})

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;