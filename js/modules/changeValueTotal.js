export default function changeValueTotal() {
    const carrinho = document.querySelector(".carrinho");
    const quantidadeItens = carrinho.querySelector('h1 span')
    const valorTotal = carrinho.querySelector(".valor-total span");
    const itensCarrinho = carrinho.querySelectorAll(".container-produto-carrinho");

    let totalItens = 0;
    let total = 0;
    if(itensCarrinho.length === 0) {
        quantidadeItens.innerText = '(0)'
        valorTotal.innerText = '$0'
    }
    itensCarrinho.forEach((item) => {
        const valorMultiplicado = item.querySelector(".valor-multiplicado");
        const quantidadeItem = item.querySelector('.quantidade-itens')
        const quantidadeResetado = +quantidadeItem.innerText.replace('x', '')
        const valorResetado = +valorMultiplicado.innerText.replace("$", "");
        totalItens += quantidadeResetado
        total += valorResetado;
        valorTotal.innerText = `$${total}`
        quantidadeItens.innerText = `(${totalItens})`
    });
}
