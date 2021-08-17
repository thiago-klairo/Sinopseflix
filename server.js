const express = require("express")
const app = express();
app.set("view engine", "ejs")

app.get("/", (req, res) => {


    res.render("pages/index", {

    });
})
app.use(express.static("public"));

/* ROTAS PARA FILMES*/
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

app.get("/classicHorror", (req, res) => {
    res.render("movies/classicHorror")
})


app.get("/ruaDoMedo", (req, res) => {
    res.render("movies/ruaDoMedo")
})

app.get("/godzillaVsKong", (req, res) => {
    res.render("movies/godzillaVsKong")
})

app.get("/luca", (req, res) => {
    res.render("movies/luca")
})


/* ROTAS PARA SÉRIES*/


app.get("/theboys", (req, res) => {
    res.render("series/theboys")
})

app.get("/atypical", (req, res) => {
    res.render("series/atypical")
})

app.get("/invincible", (req, res) => {
    res.render("series/invincible")
})
app.get("/loveDeathRobots", (req, res) => {
    res.render("series/loveDeathRobots")
})

app.get("/you", (req, res) => {
    res.render("series/you")
})

app.get("/peakyBlinders", (req, res) => {
    res.render("series/peakyBlinders")
})
app.get("/gotham", (req, res) => {
    res.render("series/gotham")
})

app.get("/blackMirror", (req, res) => {
    res.render("series/blackMirror")
})

app.get("/blackMirror", (req, res) => {
    res.render("series/blackMirror")
})


app.listen(8080)
console.log("Rodando")