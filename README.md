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

- O que é framework = é um conjunto de recursos e ferramentas para resolver algum problema
- O que é o Express =  é um framework utilizado para desenvolver API

- O que é JavaScript = é uma linguagem de programação usada principalmente para adicinar interatividade nas páginas web e app

- O que é node.js =  é um ambiente (runtime) de desenvolvimento de API
- node é cross plataforma, ele roda em diferentes sistema operacionais
- O que é NPM (Node Package Manager) = gerenciador de pacotes 
- Quem cria a pasta node_modules = npm i
- para desinstalar um pacote = npm uninstall (nome do pacote)

- Protocolo http (Request e Response)
- Métodos http (GET, POST, PUT, PATCH, DELETE)

- Como mudar o formato de importação/exportação de require para import
(Adicionar no package.json a propriedade "type": "module")
- --wacth = é um parâmetro para rodar um js em modo dev, que permite rodar o script quando algum arquivo é alterado


### Parâmetros de rotas
- Router = serve para separar as rotas, oranizar o código e facilitar a manutenção do projeto
- parâmetros de rotas = Exemplo: :/id

- O que é um Padrão de Projeto? R: Uma forma de codificar que é amplamente conhecido.
- MVC = Model View Controller
serve para organizar o código, dividindo a responsabilidade em 3 camadas.
    Model = Acesso ao banco de dados, regras de negócio
    View = Camada de apresentação que vai fazer a interface do usuário
    Controller = Controla a entrada, o processamento e a saída de dados
- Objetivo do padrão de projeto = organizar o projeto de uma forma lógica que até outro desenvolvedor saiba achar o que for necessário


## Prisma
- ORM = Object Relational Model = Modelo de Objeto Relacional
- O que é o ORM? Uma ferramenta que cria uma relação entre o código e o banco de dados
- Porque Usar um ORM? R: Pela facilidade de modificar e executar os comandos no banco de dados.


### Dependencias
- Dependencias DEV são utilizadas durante o desenvolvimento para ajudar
- Dependencias normais são utilizadas internamente no código


## comandos prisma
- npm i prisma -D -instala o prisma dev
- npx prisma db pull - traz as informações criadas no banco
- npx prisma db push -  envia informações para o banco
- npx prisma generate

- cors = uma segurança do navegador


### Middleware 
- é uma função
- tudo que tem req e res é um middleware
- padrão de projeto middleware usado pelo express que divide o código em funções que são chamadas de middleware execuções
- quem é o último middleware do código? = o controller