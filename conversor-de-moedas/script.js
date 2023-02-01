//data da cotação utilizada: 01/02/2023
let cotacaoUSD = 5.08;
let cotacaoEUR = 5.55;
let cotacaoBTC = 117114.88;

//valores para testar
let valorUSD = 209.99;
let valorEUR = 1272.09;
let valorBTC = 13.42;

let usdEmBRL = valorUSD * cotacaoUSD;
let eurEmBRL = valorEUR * cotacaoEUR;
let btcEmBRL = valorBTC * cotacaoBTC;

usdEmBRL = usdEmBRL.toFixed(2);
eurEmBRL = eurEmBRL.toFixed(2);
btcEmBRL = btcEmBRL.toFixed(2);

let nome = "Alessandra";

alert(
  "Olá, " +
    nome +
    "!" +
    "\n" +
    "O valor US$ " +
    valorUSD +
    " é R$ " +
    usdEmBRL +
    "\n" +
    "O valor € " +
    valorEUR +
    " é R$ " +
    eurEmBRL +
    "\n" +
    "O valor ₿ " +
    valorBTC +
    " é R$ " +
    btcEmBRL +
    "\n"
);