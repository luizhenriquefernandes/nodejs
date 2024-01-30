/**
 * npm install express
 * npm install cors
 * npm install ejs
 * npm install bootstrap@5.3.2
 */

const express = require('express');
const cors = require('cors');
const port = 3000;
const app = express();
const path = require('path');
app.use(express.static('public'));
app.use(cors());
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
/**nessa parte é comum dar erro de acesso então é importante
 * no app.get deixar claro quais arquivos ejs serão abertos.
 */
app.get(`/principal/index`,(req,res)=>{
    res.render(`principal/index`,{
        nome:'Hello World'
        });        
});
app.get(`/principal/perguntar`,(req,res)=>{
    res.render(`principal/perguntar`,{
        ab:'Perguntar',
        e:"eu"
    });        
});
app.listen(port,function(erro){
    try{
        console.log(port,`Logado com sucesso na porta ${port}`);
    }
    catch(error){
        console.log(`Não foi possível logar na porta ${port}<br>`);
    }
})

