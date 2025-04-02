export default function createElementsCart({ nomeProduto, precoProduto, quantidadeItem }) {
    const carrinho = document.querySelector(".carrinho");
    const valorTotal = carrinho.querySelector(".valor-total");

    const createElement = (tag, className) => {
        const element = document.createElement(tag);
        if (className) element.classList.add(className);
        return element;
    };

    const addContainer = () => {
        const divContainer = createElement("div", "container-produto-carrinho");
        carrinho.insertBefore(divContainer, valorTotal);
        addItensContainer(divContainer);
    };

    const addItensContainer = (container) => {
        const divInformacoes = createElement("div", "informacao-produto");
        const botaoFechar = createElement("span", "icon-fechar");

        addItensInformacoes(divInformacoes);

        container.appendChild(divInformacoes);
        container.appendChild(botaoFechar);
    };

    const addItensInformacoes = (divInformacoes) => {
        const tituloItem = createElement("h2");
        const containerValores = createElement("div");
        const quantidadeItens = createElement("span", "quantidade-itens");
        const valorProduto = createElement("span", "valor-produto");
        const valorMultiplicado = createElement("span", "valor-multiplicado");

        tituloItem.innerText = nomeProduto;
        valorProduto.innerText = precoProduto;
        valorMultiplicado.innerText = quantidadeItem * precoProduto;

        containerValores.appendChild(quantidadeItens);
        containerValores.appendChild(valorProduto);
        containerValores.appendChild(valorMultiplicado);

        divInformacoes.appendChild(tituloItem);
        divInformacoes.appendChild(containerValores);
    };
    addContainer();
}
