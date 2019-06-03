var express = require('express');
var app = express();
var expressValidator = require('express-validator');
var bodyParser = require('body-parser');
var urlencodedparser = bodyParser.urlencoded({extended: false});

app.use(express.static('public'));
app.use(expressValidator());
app.get('/1b.html', function(req, res) {
    res.sendFile(__dirname+'/'+'1b.html');
});
app.post('/insert', urlencodedparser, function(req, res) {
    req.checkBody('name', 'Enter name').notEmpty();
    req.checkBody('surname', 'Surname not entered properly').isString();
    req.checkBody('salary', 'Salary must be integer').isInt();

    var errors = req.validationErrors();
    if(errors){
        console.log(errors);
        res.send(errors);
    }
    else{
        console.log(JSON.stringify(req.body));
        res.end(JSON.stringify(req.body));

    }
   
});

 app.listen(3000);
