const express = require('express');
const Joi = require('joi');
const router = express.Router();
const mongoose = require('mongoose');
const card_controller = require('../controllers/users');
const user_controller = require('../controllers/auth');
const check_auth = require ('../controllers/check-auth');


//const db = "mongodb://shashipppp:shashi3333@ds019936.mlab.com:19936/user_management";
const db="mongodb://shashipppp:shashi3333@ds019936.mlab.com:19936/user_management";

mongoose.Promise = global.Promise;
var options =  { useMongoClient: true, keepAlive: 1, connectTimeoutMS: 30000, reconnectTries: 30, reconnectInterval: 5000 }
mongoose.connect(db,options,(err)=>{
    if(err){
        console.log('mongoErr'+err);
    }else{
        console.log('Successfully connected to the Mongosee DB: user_management');
    }
});



router.get('/users', card_controller.users_get_all);


router.post('/user/signUp', user_controller.user_signup);
router.post('/user/login', user_controller.user_login);






module.exports = router;