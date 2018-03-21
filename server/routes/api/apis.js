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
  Profile.findOne({account:req.user._id}, (err, profile) => {
    if (err)    { return res.json(err).status(500); }
    if (!profile) { return res.json(err).status(404); }
    return res.json(profile);
    const features={
      sources: '',
      q: 'football',
      category: 'sports',
      language: '',
      country: ''
    };
    newsapi.v2.topHeadlines(features).then(response => {
      return res.json(response)
    });
    
  });
// All options passed to topHeadlines are optional, but you need to include at least one of them



// const NewsAPI = require('newsapi');
// const newsapi = new NewsAPI('YOUR_API_KEY');
 
// // To query top headlines
// // All options passed to topHeadlines are optional, but you need to include at least one of them
// newsapi.v2.topHeadlines({
//   sources: 'bbc-news,the-verge',
//   q: 'trump',
//   category: 'politics',
//   language: 'en',
//   country: 'us'
// }).then(response => {
//   console.log(response);
// });
 
// // To query everything
// // You must include at least one q, source, or domain
// newsapi.v2.everything({
//   q: 'trump',
//   sources: 'bbc-news,the-verge',
//   domains: 'bbc.co.uk, techcrunch.com',
//   from: '2017-12-01',
//   to: '2017-12-12',
//   language: 'en',
//   sortBy: 'relevancy',
//   page: 2
// }).then(response => {
//   console.log(response);
// });
 
// // To query sources
// // All options are optional
// newsapi.v2.sources({
//   category: 'technology',
//   language: 'en',
//   country: 'us'
// }).then(response => {
//   console.log(response);
// });

});

module.exports = router;