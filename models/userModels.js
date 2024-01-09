const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        username:{
            type: String,
            required: [true, "Please Enter valid username"]
        },
        password:{
            type: String,
            required: [true, "Please enter valid password"]
        }
    },
    {
        timestamps: true
    }
) 

const User = mongoose.model('User', userSchema);

module.exports = User;