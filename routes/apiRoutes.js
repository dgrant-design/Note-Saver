var noteOne = require("../db.json");



module.exports = function (app) {

    //GET Request

    app.get("/api/notes", function (req, res) {
        res.json(noteOne);
        console.log(noteOne);
    });

    //POST Request

    app.post("/api/notes", function (req, res) {
        noteOne.push(req.body);
        res.json(true);
        console.log("The Note has been saved");
    });

    //DELETE Request

    app.delete("/api/notes/:id", function (req, res) {
        noteOne.pop(req.body);
        res.json(true);
        console.log("The Note has been removed");
    });
}