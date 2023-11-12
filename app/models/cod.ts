import mongoose, { Schema } from "mongoose";

const codSchema = new Schema({
  fullname: {
    type: String,
    required: [true, "Name is required."],
    trim: true,
    minLength: [2, "Name must be larger than 2 characters"],
    maxLength: [50, "Name must be lesser than 50 characters"],
  },

  email: {
    type: String,
    required: [true, "Email is required."],
    match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Invalid email address"],
  },

  number: {
    type: String,
    required: [true, "Message is required."],
  },
  
  date: {
    type: Date,
    default: Date.now,
  },
  names: {
          type: [String]
  },
  prices: {
    type: [Number]
},
colors: [
  [String]
],
sizes: [
{  size: String
}],
quantity: {
  type: [Number]
}, 
address1: {
  type: String,
  required: [true, "adress 1 is required."],
},
address2: {
  type: String,
}
});

const Cod =
  mongoose.models.Cod || mongoose.model("Cod", codSchema);

export default Cod;