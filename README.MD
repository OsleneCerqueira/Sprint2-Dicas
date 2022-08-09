# SPRINT II - MUDULO 4

## Proposta
Criar duas rotas em nossa aplicação, uma delas vai receber uma dica e
gravar essa dica no banco de dados e a outra rota deve devolver de forma
aleatória uma das dicas que estão armazenadas no banco.

### Pré-Requisitos
Node.js v.16.15.1
NPM v.8.11.0
Insomnia

### Packages
Express
Nodemon

## Instalação da Aplicação
Abra o terminal/Powershell e rode os comandos abaixo:

#### Clonando o repositório:
 ```
 git clone https://github.com/OsleneCerqueira/Sprint2-Dicas.git
 ```
### Instalando os pacotes:
```
npm install
```
### Rodando o projeto:
```
npm run start
```
### Abrir o Insomnia 

#### Na rota post :
```
http://localhost:4000/create
```
#### No Json:
```
{
"dica" : "[dica que voce quer adicionar]"
}
```
#### Na rota get :
```
http://localhost:4000/tips
```


