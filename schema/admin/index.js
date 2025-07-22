import mongoose from "mongoose";

const PlanSchema = new mongoose.Schema({
  plan_name: { type: String },
  plan_date: { type: Number },
});

const AdminSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  password: { type: String, required: true },
  users: { type: Number, default: 0 },
  balanse: { type: Number, default: 0 },
  keys: { type: Number, default: 0 },
  plans: {
    type: PlanSchema,
    default: () => [],
  },
});

export default mongoose.model("AdminStatisics", AdminSchema);
