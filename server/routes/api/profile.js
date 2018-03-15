const express       = require('express');
const router        = express.Router();
const Profile         = require('../../models/Profile');
var multer  = require('multer');
var upload = multer({ dest: './public/uploads/' });

// // get articles
// router.get('/profile', (req, res, next) => {
//   Profile.find({}, (err, profiles) => {
//     if (err) { return res.json(err).status(500); }

//     return res.json(profiles);
//   });
// });
// get single article
router.get('/:id', (req, res, next) => {
  Profile.findById(req.params.id, (err, profile) => {
    if (err)    { return res.json(err).status(500); }
    if (!profile) { return res.json(err).status(404); }

    return res.json(profile);
  });
});
// create a profile esta en user

// update a profiles
router.post('/:id', (req,res,next)=>{
  const updates = {
    birthday   : req.body.birthday,
    name  : req.body.name,
    profilePic       : `/uploads/${req.file.filename}`
  };
  Profile.findByIdAndUpdate(req.params.id, updates, {new:true})
  .then(item=>res.status(200).json(item))
  .catch(e=>res.status(500).send(e));
});


// delete article
router.get('/:id/delete', (req,res,next)=>{
  Profile.findByIdAndRemove(req.params.id)
  .then(items=>res.status(200).json(items))
  .catch(e=>res.status(500).send(e));
});

module.exports = router;
