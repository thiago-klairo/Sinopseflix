const express = require("express")
const app = express();
app.set("view engine", "ejs")




app.get("/", (req, res) => {


    res.render("pages/index", {

    });
})
app.use(express.static("public"));

/*rotas */
app.get("/space", (req, res) => {
    res.render("movies/spaceJam")
})

app.get("/lugarSilencioso", (req, res) => {
    res.render("movies/silent")
})

app.get("/viuvaNegra", (req, res) => {
    res.render("movies/viuvaNegra")
})

app.get("/soul", (req, res) => {
    res.render("movies/soul")
})
app.get("/series", (req, res) => {

    res.render("pages/series")
})
app.listen(8080)
console.log("Rodando")