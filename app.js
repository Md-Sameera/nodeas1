const http = require('http');

const server=http.createServer(function(req , res){
    res.write('HAI , Hello this is normal text');
    res.write("<h1> HTML CODE </h1>");
    res.write(JSON.stringify(data...));
    res.end();
})
server.listen(4000);
