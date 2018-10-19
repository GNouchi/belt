const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;
const { alphaOnly } = require('./masterValidator')(); 

mongoose.connect(
    'mongodb://localhost/beltexam',
    {useNewUrlParser:true},
    err => err ? console.log(err) : console.log("====> db running fine"),    
)


PetSchema= new mongoose.Schema({
    name:{
        type: String,
        required:[true,'Please enter a name'],
        validate: [ alphaOnly.validator, alphaOnly.description, ],
        unique: true,
        uniqueCaseInsensitive: true ,
    },
    description:{
        type: String,
        minlength:[3,'Descriptions should be at least 3 characters long'],
    },
    type:{
        type: String,
        minlength:[3,'Type should be at least 3 characters long'],
    },
    skillone:{
        type: String,
    },
    skilltwo:{
        type: String,
    },
    skillthree:{
        type: String,
    },
    votes:{
        default: 0,
        type: Number
    },

})

PetSchema.plugin(uniqueValidator, { message: 'Michael Choi said our pets cant have the same name' });


module.exports = {
    Pet : mongoose.model('Pet', PetSchema),
}