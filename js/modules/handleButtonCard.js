export default function HandleButtonCard() {}

const buttonsAddCard = document.querySelectorAll(".btn-adicionar");
const addEventButtons = () => {
    buttonsAddCard.forEach((button) => {
        const buttonsAumentar = button.querySelector(".aumentar");
        const buttonsDiminuir = button.querySelector(".diminuir");
        const quantidadeItens = button.querySelector(".contador-quantidade");
        buttonsDiminuir.addEventListener("click", () => {
            diminuirProdutos(quantidadeItens);
        });
        buttonsAumentar.addEventListener("click", () => {
            aumentarProdutos(quantidadeItens);
        });
    });
};

const diminuirProdutos = (quantidadeItens) => {
    let quantidade = +quantidadeItens.innerText;
    if (quantidade == 0) {
        console.log("Não pode diminuir");
    } else {
        quantidade --;
        quantidadeItens.innerText = quantidade;
    }
};

const aumentarProdutos = (quantidadeItens) => {
    let quantidade = +quantidadeItens.innerText;
    if (quantidade == 10) {
        console.log("Não pode aumentar");
    } else {
        quantidade ++;
        quantidadeItens.innerText = quantidade;
    }
};

addEventButtons();
