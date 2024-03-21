import axios from 'axios';

// todo: Adicionar API da coingecko aqui
// todo: desenvolver as Rotas da API em um arqv separado.
// todo: implementar listagem das moedas da API
// todo: implementar conexão com a Meta Mask
// todo: implementar visualização de dados e interface da meta MASK
// todo: aplicar responsividade no APP

export const coinGeckoAPI = axios.create({
    baseURL: `https://api.coingecko.com/api/v3/`
})