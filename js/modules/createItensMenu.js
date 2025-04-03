export default function createItensMenu({ name, category, price }) {
    const containerGrid = document.querySelector(".container-grid");

    const createElement = (tag, className) => {
        const element = document.createElement(tag);
        if (className) element.classList.add(className);
        return element;
    };

    const createSection = () => {
        const sectionProduto = createElement("section", "produto");
        createContentSection(sectionProduto);
        containerGrid.appendChild(sectionProduto);
        return sectionProduto;
    };

    const createContentSection = (sectionProduto) => {
        const containerImagem = createElement("div", "container-imagem");
        const containerDescricao = createElement("div", "container-descricao");

        createContentImagem(containerImagem);
        createContentDescricao(containerDescricao);

        sectionProduto.appendChild(containerImagem);
        sectionProduto.appendChild(containerDescricao);

        return sectionProduto;
    };

    const createContentDescricao = (containerDescricao) => {
        const paragrafo = createElement("p");
        const titulo = createElement("h2");
        const preco = createElement("div", "preco");
        paragrafo.innerText = category;
        titulo.innerText = name;
        preco.innerText = `$${price}`;

        containerDescricao.appendChild(paragrafo);
        containerDescricao.appendChild(titulo);
        containerDescricao.appendChild(preco);

        return containerDescricao;
    };

    const createContentImagem = (containerImagem) => {
        const image = createElement("img");
        const divButton = createElement("div", "btn-adicionar");

        createContentDivButton(divButton);

        containerImagem.appendChild(image);
        containerImagem.appendChild(divButton);

        return containerImagem;
    };

    const createContentDivButton = (divButton) => {
        const iconButton = createElement("img", "icon-car");
        const paragrafoButton = createElement("p");
        const diminuir = createElement("span", "diminuir");
        const quantidadeItem = createElement("span", "contador-quantidade");
        const aumentar = createElement("span", "aumentar");

        iconButton.setAttribute("src", "./assets/images/icon-add-to-cart.svg");
        paragrafoButton.innerText = "Add to Cart";

        divButton.appendChild(iconButton);
        divButton.appendChild(paragrafoButton);
        divButton.appendChild(diminuir);
        divButton.appendChild(quantidadeItem);
        divButton.appendChild(aumentar);

        return divButton;
    };

    return createSection();
}
