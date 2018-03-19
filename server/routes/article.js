const express       = require('express');
const router        = express.Router();
const Article         = require('../models/Article');

// get articles
router.get('/article', (req, res, next) => {
  Article.find({}, (err, entries) => {
    if (err) { return res.json(err).status(500); }

    return res.json(entries);
  });
});
// get single article
router.get('/article/:id', (req, res, next) => {
  Article.findById(req.params.id, (err, entry) => {
    if (err)    { return res.json(err).status(500); }
    if (!entry) { return res.json(err).status(404); }

    return res.json(entry);
  });
});
// create an article
router.post('/article', (req, res, next) => {
  const newArticle = new Article({
    title: req.body.title,
    subhead: req.body.subhead,
    content: req.body.content
  });

  newArticle.save( (err) => {
    if (err)             { return res.status(500).json(err) }
    if (newArticle.errors) { return res.status(400).json(newArticle) }
                           return res.json(newEntry);
  });
});



exports.patchCard = (req,res,next)=>{
  Card.findByIdAndUpdate(req.params.id, req.body, {new:true})
  .then(item=>res.status(200).json(item))
  .catch(e=>res.status(500).send(e));
}


// delete article
router.get('/article/:id', (req,res,next)=>{
  Article.findByIdAndRemove(req.params.id)
  .then(items=>res.status(200).json(items))
  .catch(e=>res.status(500).send(e));
});

module.exports = router;





