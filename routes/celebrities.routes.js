const Celebrity = require("../models/Celebrity.model");

// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

// all your routes here

router.get("/celebrities", async (req, res) => {
    try {
        const celebrities = await Celebrity.find()
        console.log(celebrities)
        res.render("celebrities/celebrities.hbs", {celebrities} )
    } catch (err){
        console.log(err)
    }

})


router.get("/celebrities/create", (req, res) => {
    res.render("celebrities/new-celebrity.hbs")
})

router.post("/celebrities/create", async (req, res) => {
   try{
    const newCelebrity = await Celebrity.create(req.body)
    res.redirect("/celebrities")
   } catch(err){
        res.render("celebrities/new-celebrity")
    }
})


module.exports = router;