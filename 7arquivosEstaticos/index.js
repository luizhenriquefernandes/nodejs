/**
 * npm create
 * npm install express
 * npm install nodemon
 * npm install cors
 * npm install ejs
 */
const express = require('express');
const app = express();
app.use(express.static('public'));
const port = 3000;
const cors = require('cors');
app.use(cors());
const path = require('path');
app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views'));
app.get(`/:nome/:sexo`,(req,res)=>{
    let nome = req.params.nome;
    let sexo = req.params.sexo;
    res.render("index",{
        nome: nome,
        sexo: sexo
    });
});

app.listen(port,function(erro){
    try{
        console.log(port,`Logado com sucesso na porta ${port}`);
    }
    catch(error){
        console.log(`Não foi possivel logar erro na porta ${port}`);
    }
});
