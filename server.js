import http from 'http';
import fs from 'fs/promises';
import url from 'url';
import path from 'path';
const PORT = process.env.PORT

// Get Current path
const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


const server = http.createServer(async(req, res) => {
    // res.setHeader('Content-Type', 'text/html')
    // res.statusCode = 404
    // res.write('Hello Moses');
    // res.end('<h1>afgadfsg</h1>');
    // console.log(req.url)
    // console.log(req.method)

    // res.writeHead(200, {'Content-Type': 'application/json'});
    // res.end(JSON.stringify({message: 'Server Error'}));

    try {
        if(req.method === 'GET') {
            
            let filePath;
            if (req.url === '/') {
                // res.writeHead(200, {'Content-Type': 'text/html'});
                // res.end('<h1>HomePage</h1>');

                filePath = path.join(__dirname, 'public', 'index.html')
            } else if(req.url === '/about') {
                filePath = path.join(__dirname, 'public', 'index.html')
            } else {
                throw new Error('Not Found!')
            }

            const data = await fs.readFile(filePath);
            res.setHeader('Content-Type', 'text/html');
            res.write(data);
            res.end();
        } else {
            throw new Error('Method Not allowed')
        }


    } catch (error) {
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end('Internal Server Error');
    }

});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})