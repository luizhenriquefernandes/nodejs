var http = require("http");
http.createServer(function(requisicao,resposta){
    resposta.end("<h1>Bem vindo Ao site!</h1><br><h4>omelhorsite.com</h4>")
}).listen(3457);
console.log("O Servidor foi Atividado");