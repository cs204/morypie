const http = require("http")
const server = http.createServer()

server.on('request', requestHandler)
server.listen(8080)

function requestHandler(req, res)
	{
		if( req.url == "/")
		{
			res.writeHead(200, {"Constent-Type": "application/json"})
			let person = {Name: "Kenny", age: 38}
			res.write(JSON.stringify(person))
			res.end()
		}
		else
		{
			res.writeHead(400)
			res.end("Page not found")
		}
	}

