import initChangeImage from "./changeImage.js";

export default function initContentCard() {
    const cards = document.querySelectorAll("[data-card]");
    if (cards.length) {
        async function puxarDados() {
            try {
                const dadosResponse = await fetch("../../data.json");
                const dadosJson = await dadosResponse.json();
                inserirDados(dadosJson);
            } catch (erro) {
                console.log(erro);
            }
        }
        puxarDados();

        function inserirDados(dadosJson) {
            cards.forEach((card, index) => {
                const img = card.querySelector(".container-imagem img");
                const paragrafoCard = card.querySelector(".container-descricao p");
                const tituloCard = card.querySelector(".container-descricao h2");
                const precoCard = card.querySelector(".container-descricao .preco");
                const { image, category, name, price } = dadosJson[index];

                initChangeImage(img, image, name);
                tituloCard.innerText = name;
                precoCard.innerText += price;
                paragrafoCard.innerText = category;
            });
        }
    }
}
