const express       = require('express');
const router        = express.Router();
const Profile         = require('../../models/Profile');

// get articles
router.get('/profile', (req, res, next) => {
  Profile.find({}, (err, profiles) => {
    if (err) { return res.json(err).status(500); }

    return res.json(profiles);
  });
});
// get single article
router.get('/profile/:id', (req, res, next) => {
  Profile.findById(req.params.id, (err, profile) => {
    if (err)    { return res.json(err).status(500); }
    if (!profile) { return res.json(err).status(404); }

    return res.json(profile);
  });
});
// create an article
router.post('/profile', (req, res, next) => {
  const newProfile = new Profile({
    username: req.body.username,
    birthday: req.body.birthday,
    name: req.body.name,
    account:req.user._id
  });

  newProfile.save( (err) => {
    if (err)             { return res.status(500).json(err) }
    if (newProfile.errors) { return res.status(400).json(newProfile) }
                           return res.json(newProfile);
  });
});


// update a profiles
router.get('/profile/:id', (req,res,next)=>{
  Profile.findByIdAndUpdate(req.params.id, req.body, {new:true})
  .then(item=>res.status(200).json(item))
  .catch(e=>res.status(500).send(e));
});


// delete article
router.get('/profile/:id', (req,res,next)=>{
  Profile.findByIdAndRemove(req.params.id)
  .then(items=>res.status(200).json(items))
  .catch(e=>res.status(500).send(e));
});

module.exports = router;
