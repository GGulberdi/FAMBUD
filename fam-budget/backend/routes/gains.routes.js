const express = require('express');
const router = express.Router(); // to create different routes



const gainController = require('../controller/gain.controller')

//use
// router.get('/', postController.baseRoute)


//get all
router.get('/', gainController.getGains)

//create
router.post('/newGain', gainController.createGain)

//get one
router.get('/getGain/:id', gainController.getSingleGain)

// update
router.put('/getGain/:id/update', gainController.updateGain)

//delete
router.delete('/deleteGain/:id', gainController.deleteGain)





module.exports = router