/*
npm new
npm install ejs
npm install express
npm install cors
npm install nodemon
*/
const express = require("express");
const app = express();
const path = require('path');
const port = 3000;
const cors = require("cors");
const n1 = 10;
const n2 = 5;
const r = n1+n2;
app.use = (cors());
app.set("view engine","ejs");
app.set('views', path.join(__dirname, 'views'));

app.get("/",(req,res)=>{
let nome = "nome";
let linguagem = "javasricpt";
res.render("index",{
    nome:nome,
    linguagem:linguagem,
    n1:n1,
    n2:n2,
    r:r    
});
});
//Aula 2 Fazendo as atribuições por params

app.get("/:cliente/:preco",(req,res)=>{
    let cliente = req.params.cliente;
    let preco = req.params.preco;
    res.render("parametros.ejs",{
        cliente:cliente,
        preco:preco
    });
    
});
/**Aula 3 Fazendo condicionais no html 
 * importante por barra no principal e no res char principal/condicionais
*/
app.get("/principal",(req,res)=>{
    let menssagem = false;
    res.render("principal/condicionais",{
        msg : menssagem
    });
    });

//neste caso foi criado um arquivo chamado parametro.ejs e os parâmetros foram inseridos nele.
//isse processo permite inserir valores da url nas variáveis.

//aula 4 fazendo um array e depois percorrer com o for
app.get("/for",(req,res)=>{
    let listaAluno = [
        {nome:"luiz",numero:45},
        {nome:"Adriano",numero:12},
        {nome:"Lucas",numero:35}
    ];
    res.render("for/for",{
        listaAluno:listaAluno
    });
    });

app.listen(port,function(error){
    try {
        console.log(`Logado rodando na porta ${3000}`);
        
    } catch (error) {
        
    }
});