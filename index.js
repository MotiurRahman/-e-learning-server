const express = require("express");
const app = express();
var cors = require("cors");
const port = process.env.PORT || 8000;
app.use(express.static("public"));

const courses = require("./Data/Courses.json");
const courseDetails = require("./Data/CourseDetails.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.get("/courses/:id", (req, res) => {
  const id = req.params.id;
  const courseData = courses.find((course) => course.id == id);
  res.send(courseData);
});

app.get("/course/:cat_id", (req, res) => {
  const cat_id = req.params.cat_id;
  const details = courseDetails.filter((course) => course.cat_id == cat_id);
  res.send(details);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
