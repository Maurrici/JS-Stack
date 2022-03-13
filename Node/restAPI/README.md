# API rest de Games

Esta API busca possibilitar o registro e busca de jogos. Esses dados podem ser utilizados para criar um serviço de loja de jogos, salvar seus jogos favoritos, To Do list de jogos e o que a imaginação deixar levar.

## Endpoints

## Autenticação
### POST /user
Essa rota é responsável por cadastrar um usuário no servidor, para isso deve ser informado o nome, email e senha do usuário.

#### Parâmetros
Deve ser enviado em formato JSON junto com a requisição um objeto com o os campos name, email e password.

Exemplo:
```
{
	"name": "Example Game",
	"email": "Example Email",
	"password": "123456"
}
```

#### Respostas
##### Ok! 200
Caso essa resposta aconteça, o usuário foi cadastrado  com sucesso no servidor.

##### Requisição inválida! 400
Caso essa resposta aconteça, não foi possível cadastrar o usuário pois já existe um usuário cadastrado com esse email ou os dados enviados são inválidos.

```
{
	"err": "Mensagem de erro!"
}
```

##### Erro no Servidor! 500
Caso essa resposta aconteça, isso significa que ocorreu um erro no servidor e a operação não pode ser concluída.

### POST /auth
Essa rota é responsável por retornar um token de autenticação para a utilização da API. Para isso deve ser enviado um JSON com as informações de email e senha cadastrados.

#### Parâmetros
Deve ser enviado em formato JSON junto com a requisição um objeto com o os campos email e password.

Exemplo:
```
{
	"email": "Example Email",
	"password": "123456"
}
```

#### Respostas
##### Ok! 200
Caso essa resposta aconteça, o usuário foi autenticado com sucesso e a resposta contém o nome e o token para utilização da API.

```
{
	"token": "tokenGerado",
	"name": "Example Name"
}
```

##### Requisição inválida! 400
Caso essa resposta aconteça, não foi possível autenticar o usuário pois os dados enviados são inválidos.

```
{
	"err": "Mensagem de erro!"
}
```

##### Falha na autenticação! 401
Caso essa resposta aconteça, isso significa que ocorreu um erro durante o processo de autenticação.
Motivos: Email ou senha incorretos

```
{
	"err": "Credenciais inválidas!"
}
```

##### Erro no Servidor! 500
Caso essa resposta aconteça, isso significa que ocorreu um erro no servidor e a operação não pode ser concluída.



## Games
### GET /games
Essa rota é responsável por retornar todos os jogos salvos no banco de dados, contendo id, nome, ano de lançamento e preço.

#### Parâmetros
Nenhum

#### Respostas
##### Ok! 200
Caso essa resposta aconteça, irá ser retornado a listagem de todos os jogos

Exemplo: /game
```
[
	{
		"id": 1,
		"name": "Minecraft",
		"year": 2012,
		"price": 20,
		"createdAt": "2022-02-28T19:27:21.000Z",
		"updatedAt": "2022-02-28T19:27:21.000Z"
	},
	{
		"id": 2,
		"name": "Celeste",
		"year": 2019,
		"price": 39.89,
		"createdAt": "2022-02-28T19:27:47.000Z",
		"updatedAt": "2022-02-28T19:27:47.000Z"
	}
]
```

##### Falha na autenticação! 401
Caso essa resposta aconteça, isso significa que ocorreu um erro durante o processo de autenticação.
Motivos: Token inválido, Token expirado

```
{
	"err": "Token inválido!"
}
```

##### Não encontrado! 404
Caso essa resposta acoonteça, isso significa que não foi encontrado um game com o id informado.

##### Erro no Servidor! 500
Caso essa resposta aconteça, isso significa que ocorreu um erro no servidor e a operação não pode ser concluída.


### GET /game/id
Essa rota é responsável por retornar as informações do jogo que possui o id informado na url, contendo id, nome, ano de lançamento e preço.

#### Parâmetros
Deve ser informado na rota o id do game que deseja receber as informações.

#### Respostas
##### Ok! 200
Caso essa resposta aconteça, irá ser retornado as informações do jogo com o id informado

Exemplo: /game/1

```
{
    "id": 1,
    "name": "Minecraft",
    "year": 2012,
    "price": 20,
    "createdAt": "2022-02-28T19:27:21.000Z",
    "updatedAt": "2022-02-28T19:27:21.000Z"
}
```

##### Falha na autenticação! 401
Caso essa resposta aconteça, isso significa que ocorreu um erro durante o processo de autenticação.
Motivos: Token inválido, Token expirado

```
{
	"err": "Token inválido!"
}
```

##### Erro no Servidor! 500
Caso essa resposta aconteça, isso significa que ocorreu um erro no servidor e a operação não pode ser concluída.


### POST /game
Essa rota é responsável por registrar um novo game no servidor. Sendo necessário passar um objeto contendo as informações de nome, ano e preço.

#### Parâmetros
Deve ser enviado em formato JSON junto com a requisição um objeto com o os campos name, year e price.

Exemplo: 
```
{
	"name": "Example Game",
	"year": 2022,
	"price": 10.00
}
```

#### Respostas
##### Ok! 200
Caso essa resposta aconteça, o game foi adicionado com sucesso no servidor.

##### Requisição inválida! 400
Caso essa resposta aconteça, não foi possível adicionar o game pois já existe um game registrado com esse nome ou as informações enviadas estão incompletas.

##### Falha na autenticação! 401
Caso essa resposta aconteça, isso significa que ocorreu um erro durante o processo de autenticação.
Motivos: Token inválido, Token expirado

```
{
	"err": "Token inválido!"
}
```

##### Erro no Servidor! 500
Caso essa resposta aconteça, isso significa que ocorreu um erro no servidor e a operação não pode ser concluída.


### DELETE /game/id
Essa rota é responsável por remover um game do servidor que possui o id informado na url.

#### Parâmetros
Deve ser informado na rota o id do game que deseja remover do servidor.

#### Respostas
##### Ok! 200
Caso essa resposta aconteça, o game foi removido com sucesso.

##### Requisição inválida! 400
Caso essa resposta aconteça, não foi possível remover o game pois o id enviado é inválido.

##### Falha na autenticação! 401
Caso essa resposta aconteça, isso significa que ocorreu um erro durante o processo de autenticação.
Motivos: Token inválido, Token expirado

```
{
	"err": "Token inválido!"
}
```

##### Não encontrado! 404
Caso essa resposta acoonteça, isso significa que não foi encontrado um game com o id informado.

##### Erro no Servidor! 500
Caso essa resposta aconteça, isso significa que ocorreu um erro no servidor e a operação não pode ser concluída.


### PUT /game/id
Essa rota é responsável por atualizar os dados de um game no servidor. Sendo necessário passar o id do game na url e um objeto contendo as novas informações de nome, ano e preço.

#### Parâmetros
Deve ser informado na url o id do game que se deseja atualizar.
Deve ser enviado em formato JSON junto com a requisição um objeto com o os campos name, year e price.

Exemplo: /game/1
```
{
	"name": "Example Game",
	"year": 2022,
	"price": 10.00
}
```

#### Respostas
##### Ok! 200
Caso essa resposta aconteça, o game foi atualizado com sucesso no servidor.

##### Requisição inválida! 400
Caso essa resposta aconteça, não foi possível adicionar o game pois o id enviado é inválido.

##### Falha na autenticação! 401
Caso essa resposta aconteça, isso significa que ocorreu um erro durante o processo de autenticação.
Motivos: Token inválido, Token expirado

```
{
	"err": "Token inválido!"
}
```
##### Não encontrado! 404
Caso essa resposta acoonteça, isso significa que não foi encontrado um game com o id informado.

##### Erro no Servidor! 500
Caso essa resposta aconteça, isso significa que ocorreu um erro no servidor e a operação não pode ser concluída.