const http = require("http")
const server = http.createServer()

server.on('request', requestHandler)
server.listen(8080)

function requestHandler(req, res)
	{
		res.writeHead(200, {"Content-Type":"text/plain"})
		res.write("Hello, My World!")
		res.end()
	}

