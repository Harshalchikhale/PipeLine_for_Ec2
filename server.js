const express = require("express")

const app = express()


function lw(req, res){
	res.send("welcome to my new server")
	console.log("client connected to app")
}
app.listen(3000)


