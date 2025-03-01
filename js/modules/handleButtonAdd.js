export default function initButtonAdd() {
    const sections = document.querySelectorAll(".container-imagem");
    const classAtivo = "ativo";

    sections.forEach((section) => {
        const button = section.querySelector(".btn-adicionar");
        button.addEventListener("click", () => {
            addClassItens(button, section);
        });
    });

    const addClassItens = (button, section) => {
        if (button.classList.contains(classAtivo)) return;
        const image = section.querySelector("img");
        const elementsToAddClass = [
            image,
            button,
            button.querySelector(".icon-car"),
            button.querySelector("p"),
            button.querySelector(".contador-quantidade"),
            button.querySelector(".diminuir"),
            button.querySelector(".aumentar"),
        ];
        elementsToAddClass.forEach((element) => {
            if (element) element.classList.add(classAtivo);
        });
        button.querySelector(".contador-quantidade").innerText = 1;
    };
}
