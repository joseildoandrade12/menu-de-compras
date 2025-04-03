import changeQuantityItem from "./changeQuantityItem.js";
import changeValueTotal from "./changeValueTotal.js";

export default function handleQuantityProduct(button, idSection) {
    const buttonsAumentar = button.querySelector(".aumentar");
    const buttonsDiminuir = button.querySelector(".diminuir");
    const quantidadeItens = button.querySelector(".contador-quantidade");
    quantidadeItens.innerText = 1;

    const removerClasseItens = () => {
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

        buttonsDiminuir.removeEventListener("click", diminuirProdutos);
        buttonsAumentar.removeEventListener("click", aumentarProdutos);
    };

    function aumentarProdutos() {
        const quantidade = +quantidadeItens.innerText;
        if (quantidade) quantidadeItens.innerText++;
        changeQuantityItem(idSection, quantidade + 1);
        changeValueTotal();
    }

    function diminuirProdutos() {
        const quantidade = +quantidadeItens.innerText;
        if (quantidade > 1) quantidadeItens.innerText--;
        changeQuantityItem(idSection, quantidade - 1);
        changeValueTotal();
        if (quantidade === 1) removerClasseItens(button);
    }

    buttonsDiminuir.addEventListener("click", diminuirProdutos);
    buttonsAumentar.addEventListener("click", aumentarProdutos);
}
