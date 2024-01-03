import mongoose from "mongoose";

const {Schema} = mongoose;

const userSchema = new Schema({
   name: {
      type: String, 
      required: false,
      unique: true,
   },
 email: {
    type: String,
    required: true,
    unique: true,
 },
 password: {
    type: String,
    required: false,
 },
},
{timeStamp: true}
)


export default mongoose.model.User || mongoose.model("User", userSchema);