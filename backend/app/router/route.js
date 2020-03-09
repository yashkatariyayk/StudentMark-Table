const express = require("express");
const studentRoutes = express.Router();
let studentModel = require("../model/model");

// To Add New student
studentRoutes.route("/addstudent").post(function(req, res) {
  const student = new studentModel({
    Name: req.body.Name,
    Maths: req.body.Maths,
    Physics: req.body.Physics,
    Science: req.body.Science
  });

  student
    .save()
    .then(result => {
      console.log(result);
      res.status(200).json({
        student: "student Added Successfully"
      });
    })
    .catch(err => {
      res.status(400).send("Something Went Wrong");
    });
});

// To Get List Of student
studentRoutes.route("/").get(function(req, res) {
  studentModel.find(function(err, student) {
    if (err) {
      console.log(err);
    } else {
      res.json(student);
    }
  });
});

// To Get student Details By student ID
studentRoutes.route("/").get(function(req, res) {
  let id = req.params.id;
  studentModel.findById(id, function(err, student) {
    res.json(student);
  });
});

// Defined edit route
studentRoutes.route("/edit/:id").get(function(req, res) {
  let id = req.params.id;
  studentModel.findById(id, function(err, student) {
    res.json(student);
  });
});

// To Update The student Details
studentRoutes.route("/update/:id").post(function(req, res, next) {
  studentModel.findById(req.params.id, function(err, student) {
    // let student = new studentModel(req.body);
    if (!student) return next(new Error("Unable To Find student With This Id"));
    else {
      console.log(student);
      console.log(req.body);
      (student.Name = req.body.Name),
        (student.Maths = req.body.Maths),
        (student.Physics = req.body.Physics),
        (student.Science = req.body.Science),
        (student.Total = req.body.Total),
        (student.Avg = req.body.Avg);

      student
        .save()
        .then(student => {
          res.json({ student: "student Updated Successfully" });
        })
        .catch(err => {
          res.status(400).send("Unable To Update student");
        });
      res.send(student);
    }
  });
});

// To Delete The student
studentRoutes.route("/delete/:id").get(function(req, res) {
  studentModel.findByIdAndRemove({ _id: req.params.id }, function(
    err,
    student
  ) {
    if (err) res.json(err);
    else res.json("student Deleted Successfully");
  });
});

// // Defined as Favorite list
// studentRoutes.route("/favorite").get(function(req, res) {
//   studentModel.find({ isFavorite: true }, function(err, students) {
//     if (err) res.json(err);
//     else res.json(students);
//   });
// });

// //add as favorite
// studentRoutes.route("/favorite/:id").put(function(req, res) {
//   let id = req.params.id;
//   let isFavorite = req.body.isFavorite;

//   studentModel.findByIdAndUpdate(id, { isFavorite }, function(err, student) {
//     if (err) res.json(err);
//     else res.json(student);
//   });
// });

module.exports = studentRoutes;
