const http = require('http');

http.createServer( ( req,res) => {
/* 
    console.log(req);
    res.writeHead(200, { 'Content-Type': 'application/json'});
    const personas = {
        id:1,
        nombre: 'matias'
    } */

    res.write("hola mundo");
    res.end();

})
.listen( 8080 );


console.log('Escuchando puerto', 8080);