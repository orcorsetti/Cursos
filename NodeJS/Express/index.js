//Dependencies
const express = require('express');
const colors = require('colors');
const morgan = require('morgan');

const app = express();

//Settings
app.set('appName','Curso Inicial Express');
app.set('port',3000);

//Motores de plantillas
app.set('view engine','ejs');

// Middlewares
app.use(express.json());
app.use(morgan('dev'));

//Routes
app.all('/user', (req, res, next)=>{
    console.log('Por aquí paso');
    next();
});

app.get('/',(req, res) => {
    const data = [{name:'Jonh'},{name: 'Ornela'},{name: 'Florencia'},{name: 'Bianca'}];
    res.render('index.ejs', {people: data});
});

app.get('/user',(req, res) => {
    res.json({
        usename: 'Ornela',
        lastname: 'Corsetti'
    })
})

app.post('/user/:id',(req, res)=>{
    console.log(req.body);
    console.log(req.params);
    res.send('Post request received');
});

app.put('/user/:id',(req, res)=>{
    console.log(req.body);
    res.send(`User ${req.params.id} Updated`);
});

app.delete('/user/:id',(req,res)=>{
    res.send(`User ${req.params.id} deleted`);
});

// Archivos static
app.use(express.static('public'));

app.listen(app.get('port'), ()=> {
    console.log(app.get('appName').yellow);
    console.log(`Server on Port ${app.get('port')}`.rainbow);
});