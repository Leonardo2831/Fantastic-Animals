import { Select } from "./utilitarianFunctions.js";

export default function fetchBitcoin(url, valueBitcoin) {
    fetch(url)
        .then((response) => response.json())
        .then((bitcoin) => {
            const contentValueBitcoin = Select.Single(valueBitcoin);

            contentValueBitcoin.textContent = (1000 / bitcoin.BRL.sell).toFixed(4);
        })
        .catch((error) => {
            console.log(Error(error));
        });
}