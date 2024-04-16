import mongoose from "mongoose";
const courseSchema = new mongoose.Schema({
    id: String,
    name: String,
    description: String,
    modules: [Object],
},
  { collection: "courses" });
export default courseSchema;