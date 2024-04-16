import * as dao from "./dao.js";
function ModuleRoutes(app) {
  // app.get("/api/courses/:cid/modules", (req, res) => {
  //   const { cid } = req.params;
  //   const modules = db.modules
  //     .filter((m) => m.course === cid);
  //   res.send(modules);
  // });
  // app.post("/api/courses/:cid/modules", (req, res) => {
  //   const { cid } = req.params;
  //   const newModule = {
  //     ...req.body,
  //     course: cid,
  //     _id: new Date().getTime().toString(),
  //   };
  //   db.modules.push(newModule);
  //   res.send(newModule);
  // });
  // app.delete("/api/modules/:mid", (req, res) => {
  //   const { mid } = req.params;
  //   db.modules = db.modules.filter((m) => m._id !== mid);
  //   res.sendStatus(200);
  // });
  // app.put("/api/modules/:mid", (req, res) => {
  //   const { mid } = req.params;
  //   const moduleIndex = db.modules.findIndex(
  //     (m) => m._id === mid);
  //   db.modules[moduleIndex] = {
  //     ...db.modules[moduleIndex],
  //     ...req.body
  //   };
  //   res.sendStatus(204);
  // });

  const getModules = async (req, res) => {
    const modules = await dao.findModuleByCourse(req.params.cid);
    res.json(modules);
  };

  const createModule = async (req, res) => {
    const modules = await dao.createModule(req.body);
    res.json(modules);
  }
  
  const deleteModule = async (req, res) => {
    const status = await dao.deleteModule(req.params.moduleId)
    res.json(status)
  }

  const updateModule = async (req, res) => {
    const { moduleId } = req.params;
    const status = await dao.updateModule(moduleId, req.body);
    res.json(status);
  }

  app.get("/api/courses/:cid/modules", getModules);
  app.post("/api/courses/:cid/modules", createModule);
  app.delete("/api/modules/:mid", deleteModule);
  app.put("/api/modules/:mid", updateModule);

}
export default ModuleRoutes;
