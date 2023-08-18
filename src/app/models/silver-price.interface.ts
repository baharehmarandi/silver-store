import {IPriceSilverPrices} from "./silver-price-prices.interface";

export interface IPriceSilverResponse {
    prices: IPriceSilverPrices[],
    date?: string
}
