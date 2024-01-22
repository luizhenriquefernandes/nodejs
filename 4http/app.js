var http = require("http");
http.createServer().listen(3456);
console.log("O Servidor foi Atividado");
/**
 * sse código em Node.js cria um servidor HTTP simples. Vamos analisar cada parte:

var http = require("http");:

Isso importa o módulo HTTP no Node.js. O módulo HTTP é um módulo central que fornece 
funcionalidades para criar servidores HTTP e fazer solicitações HTTP.
http.createServer():

Isso cria um servidor HTTP. O método createServer() retorna um objeto servidor HTTP.
.listen(3456);:

Este método inicia o servidor na porta especificada, neste caso, na porta 3456.
O servidor agora está "escutando" em uma porta específica e pode manipular solicitações 
HTTP que chegam a essa porta.
Juntando tudo, este pequeno script cria um servidor HTTP básico que está pronto para lidar 
com solicitações na porta 3456. No entanto, ele ainda não tem nenhuma lógica para lidar 
com solicitações específicas. Para torná-lo funcional, você precisaria adicionar um manipulador 
de solicitações usando o método createServer e fornecendo uma função de retorno de chamada para 
processar as solicitações recebidas.
 * 
 */