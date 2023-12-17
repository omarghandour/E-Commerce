import mongoose, { Schema } from "mongoose";

const paymobSchema = new Schema({
  status:{
    type: Boolean,
  },
  transaction_id: {
    type: Number,
  },
  amount: {
    type: Number,
  },
  createdAt: {
    type: String,
  },
  cFirstName: {
    type: String,
  },
  cLastName: {
    type: String,
  },
  cEmail: {
    type: String,
  },
  cPhone: {
    type: String,
  },
  ordeId: {
    type: Number,
  }
});

const Paymob =
  mongoose.models.Paymob || mongoose.model("Paymob", paymobSchema);

export default Paymob;
// status, transaction_id, amount, createdAt, cFirstName, cLastName, cEmail, cPhone, ordeId
