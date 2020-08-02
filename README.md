# ⛪ API de celebrações

API para listagem e reservas de celebrações nas igrejas da comunidade.

## 📦 Instalação e execução

```bash
# Faça o clone do repositório
git clone git@github.com:denilsonrp/celebrations-api.git
```

```bash
# Instale as dependências
yarn install
```

```bash
# Variáveis de ambiente
Crie um arquivo .env a partir do arquivo .env.example, e atualize as variáveis PORT e DB_HOST.

Exemplo:

PORT=3333
DB_HOST=localhost:27017
```

```bash
# Executar aplicação em modo desenvolvimento
yarn start

# A API irá iniciar na porta especificada na variável PORT do arquivo .env
```

## 🚀 Endpoints

-  `GET /celebrations`

Retorna um array com as celebrações onde a data limite para reserva for válida.

-  `POST /celebrations/reserve`

Cria uma reserva em uma celebração específica. O endpoint para reserva espera o seguinte payload:

```
{
	"celebration_id": "5f19946eafd519b6e418404e",  
	"person": {
		"name": "Denilson Raimundo de Paula"
	}
}
```

## 🛠️ Tecnologias utilizadas

- Node.js
- MongoDB