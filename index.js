const http = require("http") ;

const server= http.createServer((req,res)=>{
    console.log(req.url)
    res.writeHead(200,{"content-type":"text/html"});
    // res.write("how old arrr wfrgeb")
if(req.url==="/"){
    res.end(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>home page</h1>
    </body>
    </html>`)
}
else if( req.method==="GET" && req.url==="/about"){
    res.write(JSON.stringify([10,20,30,40]));
    res.end()
}
else if(req.url==="/contact")
{
res.end("contact page is here")

}
else{
    res.writeHead(404)
    res.end("error 404")
}

});
server.listen(3001);
console.log("given prot is rumiing")