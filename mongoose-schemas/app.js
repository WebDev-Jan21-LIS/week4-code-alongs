const mongoose = require('mongoose');
const Cat = require('./models/Cat');
const User = require('./models/User');

mongoose.connect('mongodb://localhost/mongoose-schemas', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((response) => {
    console.log(`Connected to ${response.connections[0].name}`);
}).catch((err) => {
    console.log(`Error occurred ${err}`);
});
//CRUD application
//Create, Read, Update, Delete

//Creating cat based on the model schema
Cat.create({
    name: 'puss',
    color: 'White',
    age:10
}).then(() => {
   console.log('Cat created');

    User.create({
        name: 'Alice',
        job: 'Architect',
        country: 'Brasil',
        countryCode: 'PT'
    }).then(() => {
        console.log('User created');

        //Find users -> Read
       // User.find()
       //User.find({ job: 'Developer'}, { _id: 0, name: 1}, { sort: { name: -1}})
       User.findById('601bd68a6cee45beda15a444')
            .then((allUsersFromDB) => {
                console.log(`All users from DB ${allUsersFromDB}`);

                //User.findByIdAndUpdate('', {})
                User.updateMany({name: 'Alice'}, { job: 'Designer'})
                    .then(() => {
                        console.log('Alices got updated');

                        //DELETE
                        //User.deleteOne
                        //User.findByIdAndDelete('123214231')
                        User.deleteMany({ name: 'Alice'})
                            .then(() => {
                                console.log('First Alice deleted');
                            });
                    });
                
            });

    });
});




//mongoose.connection.close();


