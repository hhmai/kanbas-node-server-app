const Lab6 = (app) => {
    app.get("/a6/welcome", (req, res) => {
        res.send("Welcome to Assignment 6");
      });
}

export default Lab6;