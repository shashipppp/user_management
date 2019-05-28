const mongoose = require ('mongoose');

exports.connect = async()=>{
    console.log('mongo')
    await mongoose.connect("",(err)=>{
        if(err){
            console.log('mongoErr'+err);
        }else{
            console.log('Successfully connected to the Mongosee DB: user_management');
        }
    });
}

exports.disconnect = async()=>{
    await mongoose.connection.close("",(err)=>{
        if(err){
            console.log('mongoErr'+err);
        }else{
            console.log('Successfully disconnected to the Mongosee DB: user_management');
        }
    });
}
