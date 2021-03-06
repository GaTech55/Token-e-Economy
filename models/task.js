const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  day: {
    type: String,
  },
  user_id: {
    type: Schema.Types.ObjectId,
  },
  task_completed: {
    type: Boolean,
  },
  task_name: {
    type: String,
    required: true,
  },
  target_behavior: {
    type: String,
    required: true,
  },
  token_value: {
    type: Number,
    required: true,
  },
  clinician_notes: {
    type: String,
  },
  chart: {
    type: String,
    enum: ["Yes", "No"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
