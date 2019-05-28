
const User = require('../models/user');
const mongoose = require('mongoose');
const mongo = require('../router/mongo');
const db = " ";


exports.users_get_all = async(req,res,next)=>{
      
   
  await  User.find().exec().then(docs=>{
        const response = {
            count: docs.length,
            Users: docs.map(doc=>{
                return {
                    username: doc.username,
                    email:doc.email,
                    city: doc.city,
                    number: doc.number,
                    role:doc.role,
                    id: doc._id
                }
            })

        }
        
        mongoose.connection.close(db,(err)=>{ if(err){
            console.log('mongoErr'+err);
        }else{
            console.log('Successfully disconnected to the Mongosee DB: user_management');
        }});
        res.status(200).json(response);

    })
    .catch(err=>{  console.log(err); });
}

