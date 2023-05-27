<p align="center">
  <img src="https://github.com/MayconCoutinho/Api-PetShope/assets/60453269/a78b8f03-517c-4001-8c63-d1849e4919cb" alt="Logo" width="200" height="200" />
</p>

<h1 align="center"> Api-PetShope </h1>

<a id="Sumário"></a>


<p align="center">
  <b> Api para gerenciamento de um  PetShope </b></br>
  <sub> Nessa api é possível listar, visualizar, criar, editar, excluir animais de estimação de uma petshop. 
  <sub>
</p>

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#table-of-contents)

<p align="center">
  <a href="#Introdução"> 🧩 Introdução </a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Resultados"> 🚀 Resultados</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Dependências"> 🧪 Dependências</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Ideias">💡 Possíveis Melhorias </a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Creditos"> 🏆 Créditos </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</p>

<br/>

<a id="Introdução"></a>
## 🧩 Introdução 

  ***⠀⠀⠀⠀Bem-vindo ao Petshop Administration Panel! Este projeto é de uma APi para um painel administrativo completo desenvolvido como parte de um teste técnico para uma empresa. O objetivo principal é fornecer uma plataforma fácil de usar para visualizar, criar, editar e excluir animais de estimação em uma petshop.***

<br/>

<a id="Resultados"></a>
## 🚀 Resultados 
  > Todos os resultados foram alcançados com sucesso. De modo geral são esses os resultados de cada requisição. 

<br/> 
    

## 🧭 Rota com funções do client

<br/>
  
### 🎯 Pega todos os cliente e seus pets
  
### ```GET``` 
```URL
    
 http://localhost:3003/admin/clients
    
```
  
```JSON
    RETORNA
  {
    "id": "256d8ed4-c82d-412e-bc06-4d68a5729656",
    "nome": "Maycon",
    "telefone": "28999287132",
    "pets": [
      {
        "id": "631775f3-8cff-4ea4-bc0a-a48787dc74ad",
        "nome": "Jon",
        "idade": 7,
        "tipo": "GATO",
        "raca": "Siamês",
        "donoId": "256d8ed4-c82d-412e-bc06-4d68a5729656"
      }
    ]
  },...
  }
```
  
<br /> 
  
### 🎯  Registra o cliente junto com o pet
  
### ```POST```  
  
```URL
    
http://localhost:3003/admin/client/register
    
```
  
```JSON
{
  "client": {
    "nome": "cebola",
    "telefone": "28999343577"
  },
  "pet": {
    "idade": 5,
    "nome": "cebolinha",
    "raca": "vira-lata",
    "tipo": "CACHORRO"
  }
}
```

<br /> 
  
### 🎯  Mudando qualquer dado disponivel do cliente
  
### ```PATCH```  
  
```URL
    
 http://localhost:3003/admin/client/{IdClient}
    
```
  
```JSON
{
  "telefone": "11999287132"
  
}
```

<br/> 
  
### 🎯   Deleta o usuario
  
### ```DELETE```  
  
```URL

    http://localhost:3003/admin/client
    
```
  
```JSON
{
    "id": "b7bbca37-1737-4409-aa26-32a8ef65a111"
}
```
    
        
<br/>
    
 <a href="#Sumário"> 📖 Volta ao Sumário </a>
  
<br/>

## 🧭 Rota com funçoes do pet

<br/>
    
    ### 🎯  Mudando qualquer dado disponivel do pet
  
### ```PATCH```  
  
```URL
    
PATCH http://localhost:3003/admin/client/{idClient}/pet/{idPet}
    
```
  
```JSON
{
  "nome": "Tor"
}
```

<br/> 
    
  
### 🎯  Deleta o Pet de um cliente
  
### ```DELETE```  
  
```URL
    
    http://localhost:3003/admin/pet  
    
```
  
```JSON
{
    "idClient": "b7bbca37-1737-4409-aa26-32a8ef65a111",
    "idPet":  "e08ce6c2-f3d6-45c9-a0f2-b132bf26907c"
}
```

<br/>

## 🧭 Rota para Cadastra o Adiministrador

<br/>
    
    
### 🎯  Registra o Administrador
  
### ```POST```  
  
```URL
    
http://localhost:3003/users/register
    
```
  
```JSON
{
    "name": "teste",
    "email": "teste@gmail.com",
    "password": "123456"
}
```

<br /> 
    
 ### 🎯  Logar e pegar token
  
### ```POST```  
  
```URL
    
http://localhost:3003/users/login
    
```
  
```JSON
{
    "email": "teste@gmail.com",
    "password": "123456"
}
```

<br /> 

<a href="#Sumário"> 📖 Volta ao Sumário </a>

<br /> 

<a id="Dependências"></a>
## 🧪 Dependências
> Requisitos para rotar o codigo...
  
<br /> 


## `📖 Instalação` 


<br /> 

> Caso tenha Git basta da git clone, caso não tenha basta clicar em code e depois dowloand zip e seguir os proximos passos

```BASH
git clone https://github.com/MayconCoutinho/Api-PetShope
```

<br /> 

> Caso já tenha o Node em sua maquina basta instalar o projeto com npm i
    
```BASH
    
npm i 
    
```

<br/>
    
> Caso queira rodar o projeto no front-end, vai precisar do login 

<br /> 
 

> OBS - Muito importante, caso não tenha um banco de dados PostgreSQL disponivel, não vai da para rodar o projeto, pois o projeto conecta diretamente com o banco de dados
> sendo assim crie um arquivo ".env" para por os dados do PostgreSQL.


```BASH
    
DATABASE_URL="postgres://postgres:SENHA@localhost:5432/petShop?schema=public"

JWT_KEY = "minha-senha-segura"
JWT_EXPIRES_IN = "24h"

BCRYPT_SALT_ROUNDS = 12

```
    
<br /> 

    

https://github.com/MayconCoutinho/Api-PetShope/assets/60453269/bd115047-f1fc-449e-b2ab-5cda36cdbd2f


<br /> 

> Apos isso basta entra no projeto com o vscode, entra em scripts e apertar execultar o "dev"
<br /> 

## `📖 Dependencies` 

```JSON
 "dependencies": {
    "@prisma/client": "^4.13.0",
    "@types/multer": "^1.4.7",
    "bcryptjs": "^2.4.3",
    "cors": "^2.8.5",
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "firebase": "^9.22.0",
    "firebase-admin": "^11.8.0",
    "jsonwebtoken": "^9.0.0",
    "multer": "^1.4.5-lts.1",
    "supertest": "^6.3.3",
    "uuid": "^9.0.0"
    }

```

<br /> 

## `📖 devDependencies` 


```JSON
"devDependencies": {
    "@commitlint/cli": "^17.6.3",
    "@commitlint/config-conventional": "^17.6.3",
    "@faker-js/faker": "^7.6.0",
    "@types/bcryptjs": "^2.4.2",
    "@types/cors": "^2.8.13",
    "@types/express": "^4.17.15",
    "@types/jsonwebtoken": "^9.0.0",
    "@types/node": "^18.11.18",
    "@types/supertest": "^2.0.12",
    "@types/uuid": "^9.0.0",
    "@typescript-eslint/eslint-plugin": "^5.59.2",
    "cz-conventional-changelog": "^3.3.0",
    "eslint": "^8.40.0",
    "eslint-config-prettier": "^8.8.0",
    "eslint-config-standard-with-typescript": "^34.0.1",
    "eslint-plugin-import": "^2.27.5",
    "eslint-plugin-n": "^15.7.0",
    "eslint-plugin-prettier": "^4.2.1",
    "eslint-plugin-promise": "^6.1.1",
    "husky": "^8.0.3",
    "prettier": "^2.8.8",
    "prisma": "^4.13.0",
    "ts-node-dev": "^2.0.0",
    "typescript": "^4.9.5",
    "vitest": "^0.31.0"
    }

```



<br /> 

<a id="Ideias"></a>
## 💡 Possíveis Melhoras
> Possíveis melhorias no código e no projeto, caso queira voltar e melhorá lo.

<br /> 

- [ ] ***- Testa todo o código.*** 
- [ ] ***- Criar token de confirmação para cada requisição.***
- [ ] ***- No momento é possivel acessar api sem a confirmação de que realmente é o adiministrador, oque não é interessante***
- [ ] ***- Tem muitas funções em que dever ter validações melhores***
- [ ] ***- Expandir a api para gerar dados estatisticos***
- [ ] ***- Colocar fotos fakes de clientes***
- [ ] ***- ***


<br/>

<a href="#Sumário"> 📖 Volta ao Sumário </a>

<br /> 

<a id="Creditos"></a>
## 🏆 Créditos

<br /> 

<div > 

| [<img src="https://user-images.githubusercontent.com/60453269/217899761-dc2d4e4b-3336-419d-9076-79304290aa0a.png" width=300><br><sub> Maycon Coutinho </sub>](https://www.linkedin.com/in/maycon-coutinho/) | ***Hello 😃 Se você chegou até aqui, acredito que gostou do meu projeto, nesse caso temos algo em comum, sendo assim que tal conversamos um pouco? Meu chama no linkedin 😁*** | 
|---|---|


</div> 

<br /> 


