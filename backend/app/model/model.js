const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema(
  {
    Name: String,
    Maths: Number,
    Physics: Number,
    Science: Number,
    Total: Number,
    Avg: Number
  },
  {
    collection: "Student"
  }
);

module.exports = mongoose.model("Student", StudentSchema);
