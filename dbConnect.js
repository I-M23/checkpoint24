
//function of db connect

const mongoose = require('mongoose');

const URI = "mongodb+srv://imenmad23:SHtqoqQOFfi80qg2@cluster1.4kyqccr.mongodb.net/chechpoint";

const connectDatabase = async()=>{
    await mongoose.connect(URI)
    .then(()=>{
      console.log('database connected with sucess');
    })
    .catch((err)=>{
    console.log(err);
    })
}

module.exports = connectDatabase