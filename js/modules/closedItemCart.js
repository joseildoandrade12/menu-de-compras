import changeQuantityItem from "./changeQuantityItem.js";
import changeValueTotal from "./changeValueTotal.js";
import removeClasses from "./removeClasses.js";
import changeContentCart from "./changeContentCart.js";

export default function closedItemCart() {
    const buttonsClosed = document.querySelectorAll(".icon-fechar");
    const containerGrid = document.querySelector(".container-grid");
    buttonsClosed.forEach((button) => {
        button.addEventListener("click", excluirElemento);
    });

    function excluirElemento(event) {
        const itemCarrinhoId = event.currentTarget.parentElement.getAttribute("id");
        const section = containerGrid.querySelector(`#\\3${itemCarrinhoId} `);
        const buttonAdd = section.querySelector(".btn-adicionar");
        const quantidadeItens = buttonAdd.querySelector(".contador-quantidade");
        quantidadeItens.innerText = 1;
        removeClasses(buttonAdd);
        changeQuantityItem(itemCarrinhoId, 0);
        changeValueTotal();
        changeContentCart();
    }
}
