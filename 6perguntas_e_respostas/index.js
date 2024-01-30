const express = require('express');
const app = express();
// const cors = require('cors');
const port = 4000;
// app.use(cors());
app.get('/api/mensagem',function(req,res){
    res.json({mensagem:'Olá Mundo vindo do BAckend!'});
});
app.listen(port,function(erro){
    try {
        console.log(port,"Logado com sucesso");
        
    } catch (error) {
        console.log("Ocorreu um erro ao logar");    }

});
