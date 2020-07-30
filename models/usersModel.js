const mongoose = require('../bin/mongodb');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const Schema = mongoose.Schema;
const userSchema = new Schema({
    name:{
        type:String,
        trim:true,
        required:true
    },
    user:{
        type:String,
        trim:true,
        required:true,
        unique:true
    },
    password:{
        type:String,
        trim:true,
        required:true
    }
});
//middleware: previo al guardado, se hashea el password
userSchema.pre('save', function(next){
    this.password = bcrypt.hashSync(this.password, saltRounds);
    next();
})

module.exports = mongoose.model("users", userSchema);
