const express = require('express');
const router = express.Router(); // to create different routes



const postController = require('../controller/task.controller')

//use
// router.get('/', postController.baseRoute)


//get all
router.get('/', postController.getPosts)

//create
router.post('/create', postController.createPost)

//get one
router.get('/getPost/:id', postController.getSinglePost)

// update
router.put('/getPost/:id/update', postController.updatePost)

//delete
router.delete('/delete/:id', postController.deletePost)





module.exports = router