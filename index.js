const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // to send JSON you much change this            ⬇️**************
    console.log(req.url)
    

    if(req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/html'})
    const readStream = fs.createReadStream(__dirname + '/index.html');
    readStream.pipe(res);

    }else if (req.url === '/users'){
        res.writeHead(200, {'Content-Type': 'application/json'});
    
    
            const obj = [
        {
          name: 'Flo',
          email: 'flo@me.com',
        },
        {
          name: 'Josh',
          email: 'josh@me.com',
        },
      ];

      res.end(JSON.stringify(obj));

    }else if(req.url === '/text'){
        res.writeHead(200, {'Content-Type': 'text/plain'})
        const readStream = fs.createReadStream(__dirname + '/lorem.txt') 
        readStream.pipe(res)
        
    }else if(req.url === '/about'){
        res.writeHead(200, {'Content-Type': 'text/html'})
        const readStream = fs.createReadStream(__dirname + '/about.html') 
        readStream.pipe(res)
        
    } else res.writeHead(404, {'Content-Type': 'error/html'})
    const readStream = fs.createReadStream(__dirname + '/error.html') 
    readStream.pipe(res)

})

server.listen(3000, () => {
    console.log('Listening on port 3000')
})