const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (abcd, xyz) {
  try{
  let data = abcd.body;
  console.log(data)
  if(Object.keys(data).length !=0){
  let savedData = await userModel.create(data);
  xyz.status(201).send({msg: savedData})
  }
  }
  catch (error){
  xyz.status(500).send({ msg: "error", error:error.message});
  }
};

const loginUser = async function (req, res) {
  try{
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.send({
      status: false,
      msg: "username or the password is not corerct",
    });
  
  let token = jwt.sign({userId: user._id.toString()},"nikitasingh");
  res.setHeader("x-auth-token", token);
  }

  catch(error){
  res.status(500).send({ status: true, data: token, error: error.message });
  }

};

const getUserData = async function (req, res) {
  try{
  let token = req.headers["x-Auth-token"];
  if (!token) token = req.headers["x-auth-token"];

  //If no token is present in the request header return error
  if (!token) return res.send({ status: false, msg: "token must be present" });
    // If a token is present then decode the token with verify function

  let decodedToken = jwt.verify(token, "nikitasingh");
  if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" });

  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.status(404).send({ status: false, msg: "No such user exists" });
  }
  catch(error){
  res.status(500).send({ status: true, data: userDetails, error:error.message });
  }
};

const updateUser = async function (req, res) {
  try{
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  //Return an error if no user with the given id exists in the db
  if (!user) {
    return res.status(404).send("No such user exists");
  }
  }
  catch(error){
  
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId },{password: 123450056}, {new:true});
  res.status(500).send({ status: updatedUser, data: updatedUser });
  }
};

const deleteUserData = async function(req,res){
  try{
  let userId = req.params.userId;
  let user = await userModel.findById(userId);

  if (!user) {
    return res.status(200).send("user must be deleted");
  }
  }
  catch(error){

  // let userData = req.params.
  let deletedUserData = await userModel.findByIdAndUpdate({_id: userId}, {$set:{isDeleted:true}}, {new:true});
  res.status(500).send({ status: deletedUserData, data: deletedUserData });
  }
}


const postMessage = async function (req, res) {
  try{
  let message = req.body.message
  // Check if the token is present
  // Check if the token present is a valid token
  // Return a different error message in both these cases
  let token = req.headers["x-auth-token"]
  if(!token) return res.send({status: false, msg: "token must be present in the request header"})
  let decodedToken = jwt.verify(token, 'nikitasingh')

  if(!decodedToken) return res.send({status: false, msg:"token is not valid"})
  

  let userToBeModified = req.params.userId
  let userLoggedIn = decodedToken.userId

  if(userToBeModified != userLoggedIn) return res.send({status: false, msg: 'User logged is not allowed to modify the requested users data'})

  let user = await userModel.findById(req.params.userId)
  if(!user) return res.send({status: false, msg: 'No such user exists'})
  
  let updatedPosts = user.posts
  
  updatedPosts.push(message)
  let updatedUser = await userModel.findOneAndUpdate({_id: user._id},{posts: updatedPosts}, {new: true})
  }
  catch(error){

    return res.status(500).send({status: true, data: updatedUser})
  }
}


module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUserData = deleteUserData 
module.exports.postMessage = postMessage
