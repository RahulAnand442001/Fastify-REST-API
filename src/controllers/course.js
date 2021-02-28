const Course = require("../models/course");

// get all courses
exports.getAllCourses = async (req, reply) => {
  try {
    const courses = await Course.find();
    return courses;
  } catch (error) {
    throw error;
  }
};

exports.getSingleCourse = async (req, reply) => {
  try {
    const courseId = req.params.courseId;
    const course = await Course.findById(courseId);
    return course;
  } catch (error) {
    throw error;
  }
};

exports.addCourse = async (req, reply) => {
  try {
    const course = new Course(req.body);
    const savedCourse = await course.save();
    return savedCourse;
  } catch (error) {
    throw error;
  }
};

exports.updateCourse = async (req, reply) => {
  try {
    const courseId = req.params.id;
    const course = req.body;
    const { ...updatedCourse } = course;
    const update = await Course.findByIdAndUpdate(courseId, updatedCourse, {
      new: true,
    });
    return update;
  } catch (error) {
    throw error;
  }
};

// delete an existing course

exports.deleteCourse = async (req, reply) => {
  try {
    const courseId = req.params.id;
    const course = Course.findByIdAndDelete(courseId);
    return course;
  } catch (error) {
    throw error;
  }
};
