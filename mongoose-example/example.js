const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/learnmongoose', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then((response) => {
        console.log(`Connected to Mongo DB name 
        ${response.connections[0].name}`);
    })
    .catch((error)=> {
        console.log(`Error connecting to Mongo ${error}`);
    });



//Mongoose is a ODM - Object Document Mapper
//MongoDB -> Collections
//Mongoose -> Models

//Create collection Cat
const Cat = mongoose.model('Cat', { name: String });

//Create documemnt inside collection Cat
//field name = 'ironhacker'
const ironhacker = new Cat({name: 'ironhack'});
//Persist / save our cat onto the database (mongoDB)
/*ironhacker.save()
    .then(() => {
        console.log('A new cat was created');
    })
    .catch((error) => {
        console.log(`An error occurred ${error}`);
    });*/


const Student = mongoose.model('Student', { firstName: String});
/*Student.insertMany([{ firstName: 'Alice'}, {firstName: 'Bob'}])
    .then(() => {
        console.log('Students were inserted');
    })
    .catch((error) => {
        console.log(`Error while inserting students ${error}`);
    });*/

//Create a cities model and insert two cities async await
const addCities = async () => {
    let CityModel = mongoose.model('City', { name: String });
    try {
        await CityModel.insertMany([{ name: 'Lisbon'}, { name: 'Barcelona'}])
        console.log('Cities inserted');
    } catch(e) {
        console.log(`error occurred ${e}`);
    }
}

//Create a cities model and insert two cities then
let CityModel = mongoose.model('City', { name: String});
/*CityModel.insertMany([{ name: 'Rome'}, {name: 'Paris'}]).then(()=> {
    console.log('Cities were inserted');
});*/

//addCities();

//Find all documents inside the cat collection
Cat.find().then((catsFromDB) => {
    catsFromDB.forEach((cat) => {
        console.log(`Found this cat ${cat.name}`);
    });
});






