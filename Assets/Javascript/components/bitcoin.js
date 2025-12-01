import { Select } from "./utilitarianFunctions.js";

export default function initBitCoinFetch() {
    const select = new Select();

    fetch("https://blockchain.info/ticker")
        .then((response) => response.json())
        .then((bitcoin) => {
            const contentValueBitcoin = select.Single('[data-value="bitcoin"]');

            contentValueBitcoin.textContent = (1000 / bitcoin.BRL.sell).toFixed(4);
        })
        .catch((error) => {
            console.log(Error(error));
        });
}