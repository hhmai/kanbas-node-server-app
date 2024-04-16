import * as dao from "./dao.js";
export default function CourseRoutes(app) {
  // app.get("/api/courses", (req, res) => {
  //   const courses = Database.courses;
  //   res.send(courses);
  // });
  // app.post("/api/courses", (req, res) => {
  //   const course = { ...req.body,
  //     _id: new Date().getTime().toString() };
  //   Database.courses.push(course);
  //   res.send(course);
  // });
  // app.delete("/api/courses/:id", (req, res) => {
  //   const { id } = req.params;
  //   Database.courses = Database.courses
  //     .filter((c) => c._id !== id);
  //   res.sendStatus(204);
  // });
  // app.put("/api/courses/:id", (req, res) => {
  //   const { id } = req.params;
  //   const course = req.body;
  //   Database.courses = Database.courses.map((c) =>
  //     c._id === id ? { ...c, ...course } : c
  //   );
  //   res.sendStatus(204);
  // });
  // app.get("/api/courses/:id", (req, res) => {
  //   const { id } = req.params;
  //   const course = Database.courses
  //     .find((c) => c._id === id);
  //   if (!course) {
  //     res.status(404).send("Course not found");
  //     return;
  //   }
  //   res.send(course);
  // });
  const getAllCourses = async (req, res) => {
    const courses = await dao.findAllCourses();
    res.json(courses);
  };

  const getCourseById = async (req, res) => {
    const course = await dao.findCourseById(req.params.id);
    res.json(course);
  };

  const createCourse = async (req, res) => {
    const course = await dao.createCourse(req.body);
    res.json(course);
  }

  const deleteCourse = async (req, res) => {
    const status = await dao.deleteCourse(req.params.id)
    res.json(status)
  }

  const updateCourse = async (req, res) => {
    const { id } = req.params.id;
    const status = await dao.updateCourse(id, req.body);
    res.json(status);
  }


  app.get("/api/courses", getAllCourses);
  app.post("/api/courses", createCourse);
  app.delete("/api/courses/:id", deleteCourse);
  app.put("/api/courses/:id", updateCourse);
  app.get("/api/courses/:id", getCourseById);
}
