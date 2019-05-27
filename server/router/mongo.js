const mongoose = require ('mongoose');

exports.connect = async()=>{
    console.log('mongo')
    await mongoose.connect("mongodb://shashipppp:shashi3333@ds019936.mlab.com:19936/user_management",(err)=>{
        if(err){
            console.log('mongoErr'+err);
        }else{
            console.log('Successfully connected to the Mongosee DB: user_management');
        }
    });
}

exports.disconnect = async()=>{
    await mongoose.connection.close("mongodb://shashipppp:shashi3333@ds019936.mlab.com:19936/user_management",(err)=>{
        if(err){
            console.log('mongoErr'+err);
        }else{
            console.log('Successfully disconnected to the Mongosee DB: user_management');
        }
    });
}