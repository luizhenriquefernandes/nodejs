const express = require("express");//importando o express
const app = express();//iniciando o express e passando essa inicialização para a variavel app

//fazendo uma rota simples de home
app.get("/",function(req,res){

res.send("Bem vindo ao melhor site do mundo");//só aceita uma resposta para arrumar isso é importante instalar o nodemon
});
app.get("/blog",function(req,res){
    res.send("<h1>Bem vindo ao Blog</h1>");
})

app.listen(4000,function(erro){
    try {
        console.log(4000,"Logado com sucesso");
        
    } catch (error) {
        console.log("Ocorreu um erro ao logar");    }

});
//Aula de parâmetros. Potencializar o blog com parâmetros em rotas.
//REQ DADOS ENVIADOS PELOS USUARIOS
//RES A RESPOSTA QUE SERÁ ENVIADA PARA O USUÁRIO
    app.get("/ola/:nome",function(req,res){
    res.send("<h1>Olá</h1>");
});
/**
 * Quando um usuário acessa um URL como "/ola/Joao", o Express captura o valor "Joao" como o parâmetro "nome" e você 
 * pode utilizá-lo na sua lógica de manipulação de rotas. 
 */
//Elaborando requisições
    app.get("/hello/:nome",function(req,res){
        res.send(req.params.nome);
    });
//elaborando rotas com variáveis
    app.get("/oi/:nome",function(req,res){
    const nome = req.params.nome;
    res.send(`Olá ${nome} tudo bem???`);
    });
//elaborando rotas com mais variáveis
    app.get("/dia/:nome/:empresa",function(req,res){
    const nome = req.params.nome;
    const empresa = req.params.empresa;
    res.send(`Olá ${nome} tudo bem? Sua empresa é ${empresa}`);
    });
    /**Neste exemplo, a resposta enviada de volta ao cliente será "Olá, Joao!" se a URL for "/ola/Joao". O valor de 
     * "nome" é extraído dos parâmetros da URL usando req.params.nome.

Esse é um exemplo simples de como você pode utilizar parâmetros em rotas com Express em uma aplicação Node.js para 
tornar suas rotas mais dinâmicas e capazes de responder a diferentes valores fornecidos pelos clientes.
 */
//fazendo um artigo
    app.get("/blog1/:artigo?",function(req,res){
        const artigo = req.params.artigo;
        if(artigo){
            res.send(`<h1>Artigo: ${artigo}</h1>`);
        }else{
            res.send(`<h2>Bem Vindo ao Meu Site</h2>`);
        }
    });

/**Explicação do trecho artigo
 * Definição da Rota:

A rota está configurada para corresponder ao caminho "/blog1/" seguido por um parâmetro opcional chamado "artigo". 
O ponto de interrogação após :artigo indica que o parâmetro é opcional.
Manipulação da Rota:

Dentro da função de callback, o código extrai o valor do parâmetro "artigo" usando req.params.artigo.
Condição:

Em seguida, há uma condição que verifica se o parâmetro "artigo" está presente.
Respostas Condicionais:

Se um artigo é especificado na URL, a resposta enviada de volta ao cliente é <h1>Artigo: ${artigo}</h1>.
Se nenhum artigo é especificado, a resposta é <h2>Bem Vindo ao Meu Site</h2>.
Isso significa que, se um usuário acessar a URL "/blog1/algum-artigo", a resposta será um título <h1> indicando o artigo 
específico. Se a URL for "/blog1/" (sem artigo), a resposta será um título <h2> dando as boas-vindas ao site.

O uso de parâmetros opcionais torna a rota mais flexível, permitindo que o mesmo manipulador de rota responda tanto a 
URLs que contêm um artigo específico quanto a URLs que não têm um artigo especificado.
 */
//Aula fazendo rota com query
    app.get("/canal/youtube",function(req,res){
        const canal = req.query["canal"];
        if(canal){
            res.send(`<h1>${canal}</h1>`);
        }else{
            res.send(`<h1>Nenhum Canal Fornecido</h1>`);
        }
        res.send(canal);
        //faça esse comando na url: localhost:4000/canal/youtube?canal=seunome
    });
    /**Explicação destre trecho de código
     * Definição da Rota:

A rota está configurada para corresponder ao caminho "/canal/youtube".
Manipulação da Rota:

Dentro da função de callback, o código extrai o valor do parâmetro de consulta (query parameter) chamado "canal" 
usando req.query["canal"].
Condição:

Há uma condição que verifica se o parâmetro "canal" está presente.
Respostas Condicionais:

Se um valor é fornecido para o parâmetro "canal" na URL, a resposta enviada de volta ao cliente é um título <h1> 
contendo o valor do canal.
Se nenhum valor é fornecido para o parâmetro "canal", a resposta é um título <h1> indicando que nenhum canal foi 
fornecido.
Última Linha:
Há uma linha adicional (res.send(canal);) que envia novamente o valor do canal como resposta. No entanto, esta linha 
nunca é alcançada porque as linhas anteriores já enviaram uma resposta ao cliente.
Comando na URL:

O comentário sugere fazer uma requisição para a URL: localhost:4000/canal/youtube?canal=seunome. Isso significa que 
você deve acessar essa URL e fornecer um valor para o parâmetro de consulta "canal".
Então, se você acessar a URL especificada com um valor para "canal", verá um título <h1> contendo esse valor. Se 
nenhum valor for fornecido, verá um título indicando que nenhum canal foi fornecido. A última linha (res.send(canal);) 
não será executada devido ao envio anterior de resposta nas condições anteriores.
     */

/**
 * ############################################Comandos no Terminal######################################################
 * 
npm init:

Este comando é usado para iniciar um novo projeto Node.js. Ele cria um arquivo chamado package.json no diretório do seu 
projeto. O package.json é um arquivo de configuração que armazena informações sobre o seu projeto, como nome, versão, 
descrição, scripts, dependências, entre outros. Durante a execução do comando, você será solicitado a fornecer algumas 
informações sobre o seu projeto.
Exemplo de uso no terminal:

npm init
npm install express --save:

Este comando é usado para instalar um pacote chamado express no seu projeto. O express é um framework web para Node.js 
que simplifica o processo de criação de aplicativos web. A opção --save era necessária em versões mais antigas do npm 
para adicionar a dependência ao arquivo package.json. No entanto, a partir do npm 5.0.0, isso não é mais necessário, 
pois as dependências são automaticamente adicionadas ao package.json por padrão.
Exemplo de uso:

npm install express --save
Criação automática da pasta node_modules:

Quando você executa o comando npm install, o npm baixa e instala as dependências do seu projeto. Essas dependências 
são armazenadas na pasta node_modules no diretório do seu projeto. O node_modules contém todas as bibliotecas e pacotes 
necessários para executar seu aplicativo Node.js. Este diretório não é versionado 
(geralmente adicionado ao arquivo .gitignore), pois pode ser facilmente reconstruído a partir das informações no package.json.
O comando para instalar todas as dependências listadas no package.json é:

npm install
Este comando deve ser executado no mesmo diretório onde está localizado o arquivo package.json.

Em resumo, npm init inicia um novo projeto, npm install express --save instala o framework express e cria a dependência 
no package.json, e a pasta node_modules é automaticamente criada e preenchida com as dependências quando você 
instala pacotes npm.


O nodemon é uma ferramenta que ajuda no desenvolvimento de aplicativos Node.js, reiniciando automaticamente o servidor 
sempre que detecta mudanças nos arquivos do seu projeto. Isso evita que você precise reiniciar manualmente o servidor a 
cada alteração no código, o que é útil para o desenvolvimento rápido e eficiente.

Ao utilizar o nodemon, você pode iniciar seu servidor Node.js da seguinte maneira:



nodemon seu_arquivo.js
O comando acima substitui o tradicional node seu_arquivo.js ao iniciar o servidor. O nodemon monitorará automaticamente os 
arquivos no diretório do projeto e reiniciará o servidor sempre que detectar mudanças.

A instalação do nodemon globalmente no seu sistema pode ser feita com o seguinte comando:



npm install -g nodemon
Ou, se preferir instalá-lo localmente em um projeto específico, você pode usar:



npm install nodemon --save-dev
Quando instalado globalmente, você pode usar o comando nodemon diretamente no terminal. Se instalado localmente, você pode 
adicionar um script ao seu package.json para iniciar o servidor usando nodemon. Por exemplo:

json

"scripts": {
  "start": "nodemon seu_arquivo.js"
}
Dessa forma, ao executar npm start, o servidor será iniciado com o nodemon. Isso é particularmente útil durante o desenvolvimento
, pois você verá as atualizações refletidas no servidor automaticamente após salvar os arquivos, economizando tempo e tornando o 
processo de desenvolvimento mais eficiente.

ERROS
O erro que você está enfrentando parece ser relacionado a algum problema na definição de rotas no seu aplicativo Express 
(representado pelo arquivo index.js no seu caso). O erro específico aponta para o arquivo path-to-regexp\index.js no módulo 
path-to-regexp, que é uma dependência interna do Express.

Para corrigir esse problema, você pode tentar o seguinte:

Verificar as Rotas:

Dê uma olhada nas rotas definidas no seu arquivo index.js, especialmente aquelas que estão usando parâmetros ou wildcards. 
Certifique-se de que a sintaxe está correta.
Atualizar Dependências:

Pode ser útil atualizar suas dependências, especialmente o próprio Express, para uma versão mais recente. Isso pode ser feito 
executando o seguinte comando no seu projeto:


npm install express@latest
Verificar Código com Problema:

O erro parece ocorrer no arquivo index.js na linha 16. Revise essa parte do código e certifique-se de que a definição de rota 
está correta.
Se, após realizar essas verificações, o problema persistir, seria útil examinar o código no arquivo index.js e identificar possíveis 
problemas nas rotas ou no uso do Express. Se possível, compartilhe o trecho de código relevante do index.js para que eu possa ajudar 
a diagnosticar o problema mais precisamente.


O problema persiste e ainda está relacionado a uma exceção no módulo path-to-regexp. Parece que a versão mais recente do Express não 
resolveu o problema. Vamos tentar algumas soluções adicionais:

Limpe o cache do npm:

Antes de tentar qualquer coisa, tente limpar o cache do npm para garantir que você está usando as versões mais recentes de todas as 
dependências. Execute o seguinte comando:


npm cache clean -f
Desinstale o nodemon globalmente e localmente:

Desinstale o nodemon globalmente e localmente no seu projeto:


npm uninstall -g nodemon
npm uninstall nodemon
Reinstale o nodemon localmente:

Após desinstalar o nodemon, reinstale-o localmente no seu projeto:


npm install nodemon --save-dev
Verifique o código do index.js:

Dê uma revisada no arquivo index.js, especialmente nas definições de rotas. Certifique-se de que não há problemas sintáticos ou 
lógicos nas rotas definidas.
Verifique a versão do Node.js:

Às vezes, problemas de compatibilidade podem surgir ao usar versões mais recentes do Node.js com algumas dependências. Verifique 
se a versão do Node.js é compatível com a versão do nodemon e do Express que você está usando.
Depois de tentar essas soluções, execute novamente o seu aplicativo com o nodemon e veja se o problema persiste. Se o erro ainda 
estiver presente, pode ser útil fornecer um trecho do código do seu arquivo index.js para uma análise mais detalhada.


*############################################Comandos no Terminal FIM##################################################
*############################################Entendendo o Código#######################################################


const express = require("express"); // Importando o módulo express
Nesta linha, o código está importando o módulo express para a variável express. O express é um framework para construção 
de aplicativos web em Node.js.


const app = express(); // Iniciando o express e atribuindo à variável app
Aqui, o código está inicializando o express e atribuindo o resultado à variável app. A variável app será utilizada para
configurar e controlar o aplicativo express.


app.listen(4000, function(erro) {
    try {
        console.log(4000, "Logado com sucesso");
    } catch (error) {
        console.log("Ocorreu um erro ao logar");
    }
});
Este trecho inicia o servidor express para escutar na porta 4000. O método listen faz com que o aplicativo escute as 
conexões HTTP nessa porta. A função de callback é chamada quando o servidor é iniciado. Dentro do bloco try, imprime uma 
mensagem no console indicando que o servidor está "Logado com sucesso". Se ocorrer algum erro durante a inicialização do 
servidor, a mensagem "Ocorreu um erro ao logar" será impressa.

console.log("<p>Logado</p>");
Fora do bloco listen, esta linha imprime <p>Logado</p> no console. No entanto, este trecho não estará dentro da resposta 
HTTP enviada ao navegador. Parece ser um log adicional no console.
Portanto, este código está iniciando um servidor Express na porta 4000 e exibindo mensagens no console indicando se o servidor 
foi iniciado com sucesso ou se ocorreu algum erro. O último console.log fora do bloco listen parece ser apenas uma mensagem 
adicional e não influenciará a resposta HTTP enviada pelo servidor.

*############################################FIM#######################################################################
 */