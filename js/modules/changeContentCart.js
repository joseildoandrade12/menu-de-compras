export default function changeContentCart() {
    const carrinho = document.querySelector(".carrinho");
    const quantidadeProdutos = carrinho.querySelector("h1 span");
    const quantidadeProdutosResetado = +quantidadeProdutos.innerText.replace(/[()]/g, "");
    const conteudoInicial = carrinho.querySelector(".conteudo-carrinho-inicial");
    const itensCarrinho = [
        carrinho.querySelector(".confirmar-button"),
        carrinho.querySelector(".informacao-delivery"),
        carrinho.querySelector(".valor-total"),
    ];

    if (quantidadeProdutosResetado === 0) {
        conteudoInicial.classList.remove("ativo");
        itensCarrinho.forEach((item) => {
            item.classList.add("ativo");
        });
    }

    if (quantidadeProdutosResetado !== 0) {
        conteudoInicial.classList.add("ativo");
        itensCarrinho.forEach((item) => {
            item.classList.remove("ativo");
        });
    }
}
