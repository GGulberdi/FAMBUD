
const mongoose = require('mongoose');
//import  and initiate the posts model to query the database
const Posts= mongoose.model('posts');

// function for BASE route on '/'
exports.baseRoute = async(req,res)=>{
    res.send('Server Running')
}


// function to get posts on  route '/getPosts'
exports.getPosts = async(req,res)=>{
    const posts = await Posts.find()
    res.json(posts)
}

// exports.getOnePost = async(req,res)=>{
//     let postID=req.params.id
//      const post = await Posts.findById({_id:postID})
//     res.json(post)
// }
  
  
// function to get single post
exports.getSinglePost = async(req,res)=>{    // we use mongodb's save functionality here
    let postID=req.params.id
    console.log(postID)

    await new Posts.findById({_id:postID},(err,data)=>{
        console.log(data)
        if(err){
            //if there is an error send the following response
            res.status(500).json({
                message:'Something went wrong, please try again later.'
            })
        }else{
            //if succcess send the following  response
            console.log(data)
            res.status(200).json({
                message:'Post found',
                data,
            })
        }
    })
    
}

// function to create the post
exports.createPost = async(req,res)=>{    // we use mongodb's save functionality here
    const newone =    await new Posts(req.body)
        newone.save((err,data)=>{
        console.log(data)
        if(err){
            //if there is an error send the following response
            res.status(500).json({
                message:'Something went wrong, please try again later.'
            })
        }else{
            //if succcess send the following  response
            res.status(200).json({data})
        }
    })
}

//update a single post
exports.updatePost = async(req,res)=>{    // we use mongodb's save functionality here
    let postID=req.params.id
    await  Posts.findByIdAndUpdate({_id:postID},{$set:req.body},(err,data)=>{
        if(err){
            //if there is an error send the following response
            res.status(500).json({
                message:'Something went wrong, please try again later.'
            })
        }else{
            //if succcess send the following  response
            console.log(data)
            res.status(200).json({
                message:'Post updated',
                data,
            })
        }
    })
}

//delete a single post
exports.deletePost = async(req,res)=>{    // we use mongodb's save functionality here
    let postID=req.params.id
    await  Posts.deleteOne({_id:postID},(err,data)=>{
        if(err){
            //if there is an error send the following response
            res.status(500).json({
                message:'Something went wrong, please try again later.'
            })
        }else{
            //if succcess send the following  response
            console.log(data)
            res.status(200).json({
                message:'Post deleted',
                data,
            })
        }
    })
}




// const Customer = require("../models/");

// exports.create = (req, res) => {
//   // console.log(req)
//     // Validate request
//     if (!req.body.name) {
//       res.status(400).send({ message: "Content can not be empty!" });
//       return;
//     }
//     // Create a Collection
//     const customer = new Customer ({
//       name:req.body.name,
//       email:req.body.email,
//       phone:req.body.phone,
//       city:req.body.city,
//       country:req.body.country,
//       itemsSold:req.body.itemsSold,
//       jobProfile: req.body.jobProfile,
//       additionalInfo: req.body.additionalInfo,
//       isActive: req.body.isActive
//     });
//     // Save Customer in the database
//     customer
//       .save(customer)
//       .then(data => {
//         res.send(data);
//       })
//       .catch(err => {
//         res.status(500).send({
//           message:
//             err.message || "Some error occurred while creating the Customer."
//         });
//       });
//   };
  
//   exports.findAll = (req, res) => {
//     const name = req.query.name;
//     let condition = name? {name: {$regex: new RegExp(storeLocation), $options: "i"}} : {};
  
//     Customer.find(condition)
//       .then(data => {
//         res.send(data);
//       })
//       .catch(err => {
//         res.status(500).send({
//           message: err.message || "Some error occurred while retrieving customers."
//         });
//       });
//   };
  
//   exports.findOne = (req, res) => {
//     const id = req.params.id;
  
//     Customer.findById(id)
//       .then(data => {
//         if (!data)
//           res.status(404).send({ message: "Not found Customer with id " + id });
//         else res.send(data);
//       })
//       .catch(err => {
//         res
//           .status(500)
//           .send({ message: "Error retrieving Customer with id=" + id });
//       });
//   };
  

//   exports.update = (req, res) => {
//     if (!req.body) {
//       return res.status(400).send({
//         message: "Data to update can not be empty!"
//       });
//     }
//     const id = req.params.id;
//     Customer.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
//       .then(data => {
//         if (!data) {
//           res.status(404).send({
//             message: `Cannot update Customer with id=${id}. Customer was not found!`
//           });
//         } else res.send({ message: " Customer was updated successfully." });
//       })
//       .catch(err => {
//         res.status(500).send({
//           message: "Error updating Customer with id=" + id });
//       });
//   };
  
//   exports.delete = (req, res) => {
//     const id = req.params.id;
  
//     Customer.findByIdAndRemove(id)
//       .then(data => {
//         if (!data) {
//           res.status(404).send({
//             message: `Cannot delete Customer with id=${id}. Customer was not found!`
//           });
//         } else {
//           res.send({ message: " Customer was deleted successfully!"});
//         }
//       })
//       .catch(err => {
//         res.status(500).send({ message: "Could not delete Customer with id=" + id});
//       });
//   };

//   exports.deleteAll = (req, res) => {
//     Customer.deleteMany({})
//       .then(data => {
//         res.send({
//           message: `${data.deletedCount} Customers were deleted successfully!`
//         });
//       })
//       .catch(err => {
//         res.status(500).send({
//           message: err.message || "Some error occurred while removing all customers."
//         });
//       });
//   };
  