import handleQuantityProduct from "./handleQuantityProduct.js";

export default function addEventsButtonAdd() {
    const buttonsAdd = document.querySelectorAll(".btn-adicionar");

    buttonsAdd.forEach((button) => {
        const idSection = button.parentElement.parentElement.getAttribute("id");
        handleQuantityProduct(button, idSection);
    });
}
