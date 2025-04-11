import changeQuantityItem from "./changeQuantityItem.js";
import changeValueTotal from "./changeValueTotal.js";
import removeClasses from "./removeClasses.js";
import changeContentCart from "./changeContentCart.js";

export default function handleQuantityProduct(button, idSection) {
    const buttonsAumentar = button.querySelector(".aumentar");
    const buttonsDiminuir = button.querySelector(".diminuir");
    const quantidadeItens = button.querySelector(".contador-quantidade");
    quantidadeItens.innerText = 1;

    function aumentarProdutos() {
        const quantidade = +quantidadeItens.innerText;
        if (quantidade) quantidadeItens.innerText++;
        changeQuantityItem(idSection, quantidade + 1);
        changeValueTotal();
        changeContentCart();
    }

    function diminuirProdutos() {
        const quantidade = +quantidadeItens.innerText;
        if (quantidade > 1) quantidadeItens.innerText--;
        changeQuantityItem(idSection, quantidade - 1);
        changeValueTotal();
        changeContentCart();
        if (quantidade === 1) removeClasses(button);
    }

    buttonsDiminuir.addEventListener("click", diminuirProdutos);
    buttonsAumentar.addEventListener("click", aumentarProdutos);
}
