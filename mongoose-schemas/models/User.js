const mongoose = require('mongoose');
const Schema = mongoose.Schema;

function capitalize(val) {
    return val.charAt(0).toUpperCase() + val.substring(1);
}

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    job: String,
    country: {
        type: String,
        set: capitalize
    },
    countryCode: {
        type: String,
        match: /^[A-Z]{2}$/
    }  
}, { timestamps: true } );

const User = mongoose.model('User', userSchema);
module.exports = User;