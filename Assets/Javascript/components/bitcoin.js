import { Select } from "./utilitarianFunctions.js";

export default function initBitCoinFetch() {
    fetch("https://blockchain.info/ticker")
    .then((response) => response.json())
    .then((bitcoin) => {
        const contentValueBitcoin = Select.Single('[data-value="bitcoin"]');

        contentValueBitcoin.textContent = (1000 / bitcoin.BRL.sell).toFixed(4);
    })
    .catch((error) => {
        console.log(Error(error));
    });
}