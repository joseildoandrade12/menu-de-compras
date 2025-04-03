export default function changeQuantityItem(idSection, quantidadeItem) {
    const carrinho = document.querySelector(".carrinho");
    const itensCarrinho = carrinho.querySelectorAll(".container-produto-carrinho");

    function changingValues() {
        itensCarrinho.forEach((item) => {
            if (item.getAttribute("id") === idSection) {
                if (quantidadeItem === 0) carrinho.removeChild(item);

                const quantidadeItemCarrinho = item.querySelector(".quantidade-itens");
                const preco = item.querySelector(".valor-produto");
                const valorMultiplicado = item.querySelector(".valor-multiplicado");
                const valorResetado = preco.innerText.replace("@$", "");

                quantidadeItemCarrinho.innerText = `${quantidadeItem}x`;
                valorMultiplicado.innerText = `$${valorResetado * quantidadeItem}`;
            }
        });
    }

    changingValues();
}
