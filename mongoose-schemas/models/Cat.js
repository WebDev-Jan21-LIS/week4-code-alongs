const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Schemas are a mongoose object
//that enriches the model
//by adding validation to the fields

const catSchema = new Schema({
   name: {
       type: String,
       required: true
   },
   color: {
       type: String,
       enum: ['White', 'Black', 'Brown']
   },
   age: {
       type: Number,
       min: 0,
       max: 30
   },
   catImage: {
       type: String,
       default: '/images/someCatImage.jpg'
   }
});

const Cat = mongoose.model('Cat', catSchema);
module.exports = Cat;