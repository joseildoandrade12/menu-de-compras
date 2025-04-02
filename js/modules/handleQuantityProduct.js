export default function handleQuantityProduct(button) {
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

    buttonsDiminuir.removeEventListener("click", diminuirEventListener);
    buttonsAumentar.removeEventListener("click", aumentarEventListener);
  };

  const aumentarProdutos = (quantidadeItens) =>
    function () {
      const quantidade = +quantidadeItens.innerText;
      if (quantidade < 10) quantidadeItens.innerText++;
    };

  const diminuirProdutos = (quantidadeItens) =>
    function () {
      const quantidade = +quantidadeItens.innerText;
      if (quantidade > 1) quantidadeItens.innerText--;
      if (quantidade === 1) removerClasseItens(button);
    };

  const diminuirEventListener = diminuirProdutos(quantidadeItens);
  const aumentarEventListener = aumentarProdutos(quantidadeItens);

  const addEventButton = () => {
    buttonsDiminuir.addEventListener("click", diminuirEventListener);
    buttonsAumentar.addEventListener("click", aumentarEventListener);
  };

  addEventButton();
}
