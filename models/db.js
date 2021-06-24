const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://mirror:mirror@cluster0.kcqig.mongodb.net/employee?retryWrites=true&w=majority', { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});

require('./employee.model');