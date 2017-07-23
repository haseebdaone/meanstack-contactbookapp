var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();

var promise = mongoose.connect('mongodb://haseeb:haseeb@ds161042.mlab.com:61042/mycontacts', {useMongoClient: true});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('dist'));

var contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    picture: String
});

var Contact = mongoose.model('Contact', contactSchema);

app.get('/contacts', function(req, res){
    Contact.find({}, function(err, contacts){
        if(err){
            res.send(err);
        } else {
            res.json(contacts);
        }
    });
});

app.get('/contacts/:id', function(req, res){
    Contact.findById(req.params.id, function(err, foundContact){
        if(err){
            res.send(err);
        } else {
            res.json(foundContact);
        }
    });
});

app.post('/contacts', function(req, res){
    var newContact = new Contact();
    newContact.name = req.body.name;
    newContact.email = req.body.email;
    newContact.phone = req.body.phone;
    newContact.picture = req.body.picture;
    newContact.save(function(err, savedContact){
        if(err){
            res.send(err);
        } else {
            res.json(savedContact);
        }
    });
});

app.put('/contacts/:id', function(req, res){
    Contact.findByIdAndUpdate(req.params.id, 
    {
        $set: {name: req.body.name, email: req.body.email, phone: req.body.phone, picture: req.body.picture}
    },
    {
        new: true
    },
    function(err, updatedContact){
        if(err){
            res.send(err);
        } else {
            res.json(updatedContact);
        }
    });
});

app.delete('/contacts/:id', function(req, res){
    Contact.findByIdAndRemove(req.params.id, function(err, deletedContact){
        if(err){
            res.send(err);
        } else {
            res.json(deletedContact);
        }
    });
});

app.listen(3000, function(){
    console.log('Server started on port 3000');
});