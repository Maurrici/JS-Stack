# API rest de Games

Esta API busca possibilitar o registro e busca de jogos. Esses dados podem ser utilizados para criar um serviço de loja de jogos, salvar seus jogos favoritos, To Do list de jogos e o que a imaginação deixar levar.

## Endpoints

### GET /games
Essa rota é responsável por retornar todos os jogos salvos no banco de dados, contendo id, nome, ano de lançamento e preço.

#### Parâmetros
Nenhum

#### Respostas
##### Ok! 200
Caso essa resposta aconteça, irá ser retornado a listagem de todos os jogos

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


