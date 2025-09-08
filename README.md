# Comandos

- npm init // Cria o package.json para iniciar um projeto node
- npm i nome_pacote // instala um pacote específico
- npm install // instala todos os pacotes do package.json 
ou 
  npm i // instala todos os pacotes do package.json

# Comandos Git

// configura usuário e email do git na máquina
- git config --global user.name "Renan Cavichi"
- git config --global user.email "renancavichi@gmail.com" 

- git init // inicia o git em uma pasta
- git remote add origin _url_do_github_ // vincula meu projeto local ao repositório do github.


# Tópicos Importantes

- O que é framework
- O que é JavaScript
- O que é NPM (Node Package Manager)
- O que é node.js
- O que é o Express
- Protocolo http
- Métodos http (GET, POST, PUT, PATCH, DELETE)
- Como mudar o formato de importação/exportação de require para import
(Adicionar no package.json a propriedade type: "module")

- O que é um Padrão de Projeto? R: Uma forma de codificar que é amplamente conhecido.

- MVC = Model View Controller
serve para organizar o código, dividindo a responsabilidade em 3 camadas.
    Model = Acesso ao banco de dados, regras de negócio
    View = Camada de apresentação que vai fazer a interface do usuário
    Controller = Controla a entrada, o processamento e a saída de dados

## Prisma
- ORM = Object Relational Model = Modelo de Objeto Relacional
- O que é o ORM? Uma ferramenta que cria um relacionamneto entre o javascript e o banco de dados
- Porque Usar um ORM? R: Pela facilidade de modificar e executar os comandos no banco de dados.

### Dependencias
- Dependencias DEV são utilizadas durante o desenvolvimento para ajudar
- Dependencias normais são utilizadas internamente no código

## comandos prisma
- npx prisma db pull - traz as informações criadas no banco
- npxprisma db push -  envia informações para o banco

- cors = uma segurança do navegador