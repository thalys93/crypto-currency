import { coinGeckoAPI } from "./apiUtils";

export interface coinsData {
    id: string;
    symbol: string;
    name: string;
    image: string;
    current_price: number;
    market_cap: number;
    market_cap_rank: number;
    fully_diluted_valuation: number;
    total_volume: number;
    high_24h: number;
    low_24h: number;
    price_change_24h: number;
    price_change_percentage_24h: number;
    market_cap_change_24h: number;
    market_cap_change_percentage_24h: number;
    circulating_supply: number;
    total_supply: number;
    max_supply: number;
    ath: number;
    ath_change_percentage: number;
    ath_date: string;
    atl: number;
    atl_change_percentage: number;
    atl_date: string;
    roi: null;
    last_updated: string;
}

export const getCoins = async () => {
    try{
        const response = await coinGeckoAPI.get('/coins/markets?vs_currency=usd', {
            headers: {
                'x_cg_demo_api_key' : 'CG-A8ef6ABA4gcc7Wiea486kzai'
            }
        })
        return response.data;
    }catch(e){
        console.log(e);        
    }
}

export const getCoin = async () => {}