import createElementsCart from "./createElementsCart.js";
import handleQuantityProduct from "./handleQuantityProduct.js";

export default function initButtonAdd() {
    
    const sections = document.querySelectorAll(".produto");
    const classAtivo = "ativo";

    sections.forEach((section) => {
        const descricaoProdutos = section.querySelector(".container-descricao");
        const containerImagem = section.querySelector(".container-imagem");
        const button = containerImagem.querySelector(".btn-adicionar");
        button.addEventListener("click", () => {
            if (!button.classList.contains(classAtivo)) {
                addClassItens(button, containerImagem);
                pushDadosButton(descricaoProdutos);
                handleQuantityProduct(button);
            }
        });
    });

    const addClassItens = (button, section) => {
        const image = section.querySelector("img");
        const elementsToAddClass = [
            image,
            button,
            button.querySelector(".icon-car"),
            button.querySelector("p"),
            button.querySelector(".contador-quantidade"),
            button.querySelector(".diminuir"),
            button.querySelector(".aumentar"),
        ];
        elementsToAddClass.forEach((element) => {
            if (element) element.classList.add(classAtivo);
        });
    };

    const pushDadosButton = (descricaoProdutos) => {
        const conteudos = {
            nomeProduto: descricaoProdutos.querySelector("h2").innerText,
            precoProduto: descricaoProdutos.querySelector(".preco").innerText,
            quantidadeItem: 1,
        };

        createElementsCart(conteudos);
    };
}
