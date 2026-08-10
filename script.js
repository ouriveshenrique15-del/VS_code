console.log("Café Aurora - Script carregado!");

const cardapio = [
    { nome: "Espresso", descricao: "Café curto e intenso, com crema aveludada.", preco: 7.00 },
    { nome: "Cappuccino", descricao: "Espresso, leite vaporizado e espuma cremosa.", preco: 12.00 },
    { nome: "Pão na chapa", descricao: "Pão artesanal na manteiga, quentinho.", preco: 8.00 },
    { nome: "Bolo do dia", descricao: "Fatia generosa feita na nossa cozinha.", preco: 10.00 },
    { nome: "Bolo da noite", descricao: "Fatia generosa feita na nossa cozinha.", preco: 10.00 },
    { nome: "Bolo de noiva", descricao: "Fatia generosa feita na nossa cozinha.", preco: 10.00 }
];

const cardapioGrade = document.querySelector(".cardapio__grade");

if (cardapioGrade) {

    cardapio.forEach((item) => {

        const article = document.createElement("article");
        article.classList.add("card");

        const h3 = document.createElement("h3");
        h3.classList.add("card__titulo");

        const p = document.createElement("p");
        p.classList.add("card__descricao");

        const span = document.createElement("span");
        span.classList.add("card_preco");

        h3.textContent = item.nome;
        p.textContent = item.descricao;
        span.textContent = `R$ ${item.preco.toFixed(2)}`;

        article.appendChild(h3);
        article.appendChild(p);
        article.appendChild(span);

        cardapioGrade.appendChild(article);
    });

}

const nomeCafe = "Café Aurora";
const anoFundacao = 2024;
const anoAtual = new Date().getFullYear();
const anosDeCasa = anoAtual - anoFundacao;

const precoExpresso = 7;
const precoCappuccino = 12;
const precoPaoNaChapa = 8;
const precoBolo = 10;

const rodape = document.querySelector(".rodape p");

if (rodape) {
    rodape.textContent = `© ${anoAtual} ${nomeCafe} - ${anosDeCasa} anos de história`;
}

const totalItens = 4;
const soma = precoExpresso + precoCappuccino + precoPaoNaChapa + precoBolo;
const precoMedio = soma / totalItens;

console.log(`Preço médio: R$ ${precoMedio.toFixed(2)}`);
console.log(`${nomeCafe} está no ar há ${anosDeCasa} anos.`);

const cidade = "Gaspar";
let temperatura = 4;

console.log(typeof cidade);
console.log(typeof temperatura);

const cafe = "Café Aurora";

console.log(cafe.toUpperCase());
console.log(cafe.length);

console.log(Boolean());
console.log(Boolean(""));
console.log(Boolean("cafe"));

console.log(5 + 2 - 2 + 7 - 1 / 3);

console.log(7 === "7");
console.log(2026 % 2 === 0);

const media = 150;
const mensagem = `media: R$ ${media}`;

console.log(mensagem);

function formatarPreco(valor) {
    return `R$ ${valor.toFixed(2)}`;
}


const cafeAberto = (hora) => hora >= 8 && hora < 19;

const horaAtual = new Date().getHours();

const aberto = cafeAberto(horaAtual);

console.log(aberto ? "Estamos abertos!" : "Estamos fechados.");

const botaoHero = document.querySelector(".hero .botao");

if (botaoHero) {
    botaoHero.textContent = aberto ? "Ver cardápio" : "Voltamos às 8h";
}

const listaPrecos = [7, 12, 8, 10];

console.log(listaPrecos[0]);
console.log(listaPrecos.length);
console.log(listaPrecos[listaPrecos.length - 1]);

listaPrecos.push(15);

console.log(listaPrecos);

for (const preco of listaPrecos) {
    console.log(preco);
}

const objeto = [
    { nome: "Cafe", preco: 5 },
    { nome: "Expresso", preco: 15 },
    { nome: "PQueijo", preco: 3 }
];

const nomes = objeto.map((item) => item.nome);
console.log("Nomes:", nomes);

const abaixo = objeto.filter((item) => item.preco < 10);
console.log("Baratos:", abaixo);

const encontrado = objeto.find((item) => item.nome === "Expresso");
console.log("Encontrado:", encontrado);

const somaPrecos = objeto.reduce((total, item) => total + item.preco, 0);
console.log("Soma dos preços:", somaPrecos);



const titulo = document.querySelector(".hero_titulo");

if (titulo) {
    titulo.textContent = "Bem-vindo ao Café Aurora!";
}

const links = document.querySelectorAll("nav a");
console.log("Quantidade de links:", links.length);

const card = document.querySelector(".card");

if (card) {
    card.classList.add("destaque");
}

const botao = document.querySelector(".hero .botao");
const secao = document.querySelector("#cardapio");

if (botao && secao) {
    botao.addEventListener("click", (event) => {
        event.preventDefault();

        secao.scrollIntoView({
            behavior: "smooth"
        });
    });
}