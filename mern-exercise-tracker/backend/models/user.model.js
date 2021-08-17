const mongoose = require('mongoose'); 
//const beautifyUnique = require('mongoose-beautiful-unique-validation'); 

const Schema = mongoose.Schema; 

const userSchema = new Schema({
    username: {
        type: String, 
        required: true, 
        unique: true, 
        trim: true, 
        minlength: 3},
    height: {type: String, required: false, unique: false, trim: true, minlength:4},
    weight: {type: Number, required: false, unique: false, trim: true}
}, {
    timestamps: true,
}); 

//userSchema.plugin(beautifyUnique);

const User = mongoose.model('User', userSchema); 

module.exports = User; 