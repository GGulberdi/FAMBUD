var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// const postController = require('../controller/task.controller')
// const gainController = require('../controller/gain.controller')


// //use
// // router.get('/', postController.baseRoute)


// //get all
// router.get('/', postController.getPosts)

// //create
// router.post('/create', postController.createPost)

// //get one
// router.get('/getPost/:id', postController.getSinglePost)

// // update
// router.put('/getPost/:id/update', postController.updatePost)

// //delete
// router.delete('/delete/:id', postController.deletePost)

// ////////////////////////////
// //get all
// router.get('/', gainController.getGains)

// //create
// router.post('/newGain', gainController.createGain)

// //get one
// router.get('/getGain/:id', gainController.getSingleGain)

// // update
// router.put('/getGain/:id/update', gainController.updateGain)

// //delete
// router.delete('/deleteGain/:id', gainController.deleteGain)








module.exports = router;
