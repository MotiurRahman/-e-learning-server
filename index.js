const express = require("express");
const app = express();
var cors = require("cors");
const port = process.env.PORT || 8000;
const path = require("path");
app.use("/", express.static(path.join(__dirname, "public")));

const courses = require("./Data/Courses.json");
const courseDetails = require("./Data/CourseDetails.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Get all the course API
app.get("/courses", (req, res) => {
  res.send(courses);
});

//Get specific course data based on id API
app.get("/courses/:id", (req, res) => {
  const id = req.params.id;
  const courseData = courses.find((course) => course.id == id);
  res.send(courseData);
});

// Get all the specific category content API
app.get("/course/:cat_id", (req, res) => {
  const cat_id = req.params.cat_id;
  const details = courseDetails.filter((course) => course.cat_id == cat_id);
  res.send(details);
});

// Get specific category and id content API
app.get("/course/:cat_id/:id", (req, res) => {
  const cat_id = req.params.cat_id;
  const id = req.params.id;
  const details = courseDetails.find(
    (course) => course.id == id && course.cat_id == cat_id
  );
  res.send(details);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
