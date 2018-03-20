const express       = require('express');
const router        = express.Router();
const quote = require("stoic-api");
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('3b4af330ce004204bc4122457cb415a6');
const User           = require("../../models/user");
const Profile           = require("../../models/Profile");


// randomo joke 
router.get("/",(req,res,next) =>{
  
    quote.random(  (err, quote)=> {
        if (err)    { return res.json(err).status(500); }
        if (!quote) { return res.json(err).status(404); }
        return res.json(quote);
      });

});

router.get("/news", (req,res,next) => {
  console.log("Entro a mi GEt")

// To query /v2/top-headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them
newsapi.v2.topHeadlines({
  sources: '',
  q: 'football',
  category: 'sports',
  language: '',
  country: ''
}).then(response => {
  res.send(response)
  /*
    {
      status: "ok",
      articles: [...]
    }
  */
});
} )

module.exports = router;