const Movie = require("../models/Movies.model");
// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

// all your routes here

router.get("/movies", async (req, res) => {
    try {
        const movies = await Movie.find()
        
        res.render("movies/movies.hbs", {movies} )
    } catch (err){
        console.log(err)
    }

})

router.get("/movies/create", (req, res) => {
    res.render("movies/new-movie.hbs")
})

router.post("/movies/create", async (req, res) => {
    try{
     const newMovie = await Movie.create(req.body)
     res.redirect("/movies")
    } catch(err){
         res.render("movies/new-movie.hbs")
     }
 })

 router.get("/movies/:id", async (req, res) => {
    try {
        
        const movie = await Movie.findById(req.params.id)
       
        console.log(movie)
        res.render("movies/movie-details.hbs", movie )
    } catch (err){
        console.log(err)
    }

})


router.post("/movies/:id/delete", async (req, res) => {
    try {
        const movie = await Movie.findByIdAndRemove(req.params.id)
        res.redirect("/movies")
    } catch (err){
        console.log(err)
    }

})

router.get("/movies/:id/edit", async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id)
        res.render("movies/edit-movie", movie)
    } catch (err){
        console.log(err)
    }

})


router.post("/movies/:id", async (req, res) => {
    try {
        console.log(req.params.id)
        console.log(req.body)
        const movie = await Movie.findByIdAndUpdate(req.params.id, req.body)
        res.redirect(`/movies/${req.params.id}`)
    } catch (err){
        console.log(err)
    }

})

module.exports = router;