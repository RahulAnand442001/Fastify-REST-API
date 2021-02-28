const courseAPI = require("../controllers/course");
const routes = [
  {
    method: "GET",
    url: "/api/courses",
    handler: courseAPI.getAllCourses,
  },
  {
    method: "GET",
    url: "/api/course/:courseId",
    handler: courseAPI.getSingleCourse,
  },
  {
    method: "POST",
    url: "/api/course",
    handler: courseAPI.addCourse,
  },
  {
    method: "PUT",
    url: "/api/course/:id",
    handler: courseAPI.updateCourse,
  },
  {
    method: "DELETE",
    url: "/api/course/:id",
    handler: courseAPI.deleteCourse,
  },
];

module.exports = routes;
