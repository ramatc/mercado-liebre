const express = require("express");
const path = require("path")
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({ extended: true })); 

const publicPath = path.resolve("./public") ;
app.use( express.static(publicPath) );

app.listen(process.env.PORT || 3000, function(){
    console.log("Servidor corriendo en el puerto 3000")
});

app.get("/", function(req,res){
    res.sendFile(path.resolve("./views/home.html"));
}); 

app.get("/ofertas",function(req,res){
    res.sendFile(path.resolve(__dirname,"./views/ofertas.html"))
})

app.get("/tiendas-oficiales",function(req,res){
    res.sendFile(path.resolve("./views/tiendas-oficiales.html"))
})

app.get("/vender",function(req,res){
    res.sendFile(path.resolve("./views/vender.html"))
})

app.get("/ayuda",function(req,res){
    res.sendFile(path.resolve("./views/ayuda.html"))
})

app.get("/register",function(req,res){
    res.sendFile(path.resolve("./views/register.html"))
})

app.get("/login",function(req,res){
    res.sendFile(path.resolve("./views/login.html"))
})

app.get("/mis-compras",function(req,res){
    res.sendFile(path.resolve("./views/mis-compras.html"))
})

app.post("/register",(req,res)=>{
    res.send(req.body);
})

app.post("/",(req,res)=>{
    res.send(req.body);
})


