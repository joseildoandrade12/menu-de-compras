export default function removeClasses(button) {
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
    };
    removerClasseItens();
}
