export default function handleQuantityProduct() {
    const buttonsAddCard = document.querySelectorAll(".btn-adicionar");

    const addEventButtons = () => {
        buttonsAddCard.forEach((button) => {
            const buttonsAumentar = button.querySelector(".aumentar");
            const buttonsDiminuir = button.querySelector(".diminuir");
            const quantidadeItens = button.querySelector(".contador-quantidade");
            buttonsDiminuir.addEventListener("click", () => {
                diminuirProdutos(quantidadeItens, button);
            });
            buttonsAumentar.addEventListener("click", () => {
                aumentarProdutos(quantidadeItens);
            });
        });
    };

    const aumentarProdutos = (quantidadeItens) => {
        let quantidade = +quantidadeItens.innerText;
        if (quantidade < 10) quantidadeItens.innerText = ++quantidade;
    };

    const diminuirProdutos = (quantidadeItens, button) => {
        let quantidade = +quantidadeItens.innerText;
        if (quantidade > 0) quantidadeItens.innerText = --quantidade;
        if (quantidade === 0) removerClasseItens(button);
    };

    const removerClasseItens = (button) => {
        const classAtivo = "ativo";
        const elements = [
            button.parentElement.querySelector("img"),
            button.querySelector("p"),
            button.querySelector(".icon-car"),
            button.querySelector(".aumentar"),
            button.querySelector(".diminuir"),
            button.querySelector(".contador-quantidade"),
        ];
        elements.forEach((element) => element.classList.remove(classAtivo));
        setTimeout(() => button.classList.remove(classAtivo), 10);
    };

    addEventButtons();
}
