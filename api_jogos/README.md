 # Desafio Backend

## Jogos disponíveis:
- Deve consumir de uma API e listar os jogos disponíveis
- Formato a ser listado:
```json
[{
    "id": 3161272,
    "titulo": "São Paulo x Flamengo",
    "campeonato": "Brasileirão",
    "data": "2022-08-22",
    "opcoes": [
        { "casa": 2.5 },
        { "empate": 3.1 },
        { "fora": 1.5 }
    ]
}]
```
- Deve ser possível consultar na sua api todos os eventos ou filtrar pelos campos: `id`, `campeonato` e `data`


## Venda:
- Durante a venda, deve ser informado o CPF o ID do evento, a opção selecionada e o valor da aposta
- Deve consultar na API se o CPF informado é válido
- Apenas clientes maiores de 18 anos são permitidos
- A venda só pode ser realizada até o dia anterior ao evento
- O valor dos ganhos deve ser o valor da aposta multiplicado pelo valor da opção (Ex: casa = valor da aposta * 2.5)
- O valor da aposta deve ser menor que o limite estabelecido na opção do evento

--- 
## Adicionais

### Testes
- Os testes da API devem ser simulados localmente, NÃO devem consumir a API.

### Infraestrutura
- O projeto deve estar executando no Heroku e disponibilizada rota para testes.

--- 

## API para consultar

#### Campeonatos

- GET `/campeonatos`
- response:
```json
[
	{
		"id": 30,
		"titulo": "Brasileirão - Serie A"
	},
]
```

#### Jogos

- GET `/jogos`
- response:
```json
[{
    "id": 3161272,
    "titulo": "São Paulo x Flamengo",
    "id_campeonato": 30,
    "data": "2022-08-22",
    "opcoes": [
        { "1": 2.5 },
        { "x": 3.1 },
        { "2": 1.5 }
    ],
    "limites": [
        { "1": 150 },
        { "x": 500 },
        { "2": 750 }
    ]
}]
```

#### Consultar CPF

- GET `/cpf/12345678912`
- CPFs disponíveis:
    - 83604761794
    - 36806792979
    - 46110334499
    - 23130011480
- response
```json
{
	"cpf": "461.103.344-99",
	"nome": "José Pietro Cavalcanti",
	"nascimento": "09/07/1944"
}
```