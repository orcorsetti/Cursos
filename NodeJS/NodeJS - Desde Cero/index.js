const os = require('os')
const fs = require('fs')
/*
 console.log(os.platform())
 console.log(os.release())
 console.log(os.freemem())

 fs.writeFile('./texto.txt', 'Linea uno.', function (err) {
     err ? console.log(err) : console.log('Archivo creado.')
 })
 console.log('Ultima linea de codigo')

 fs.readFile('./texto.txt', function(err, data){
     if(err) {
         console.log(err);
     }
     console.log(data.toString());
 })*/
/*
 const http = require('http');
const colors= require('colors');

const handleServer = function(req, res) {
    res.writeHead(200, {'Content-type':'text/html'})
    res.write('<h1>Hola Mundo</h1>');
    res.end();
}

const server = http.createServer( handleServer);

server.listen(3000, () => {
    console.log('Server on port 3000'.rainbow);
})*/

const colors= require('colors');
const express = require('express');
const server = express();

server.get('/',(req, res)=>{
    res.send('<h1>Hola Mundo con Express y NodeJS</h1>');
});

server.listen(3000, () => {
    console.log('Server on port 3000'.rainbow);
})
