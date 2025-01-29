export default function initButtonAdd() {}
const sections = document.querySelectorAll(".container-imagem");
const classAtivo = "ativo";

sections.forEach((section) => {
    const button = section.querySelector(".btn-adicionar");
    button.addEventListener("click", addClassItens);
});

function addClassItens(event) {
    event.preventDefault();
    const image = this.parentElement.querySelector("img");
    image.classList.add(classAtivo);
    this.classList.add(classAtivo);
    removeElements(this);
    addElementsNew(this);
}

const removeElements = (button) => {
    const icon = button.querySelector(".icon-car");
    const text = button.querySelector("p");
    text.classList.add(classAtivo);
    icon.classList.add(classAtivo);
};

const addElementsNew = (button) => {
    const buttonDiminuir = button.querySelector(".diminuir");
    const buttonAumentar = button.querySelector(".aumentar");
    const contadorDeItens = button.querySelector(".contador-quantidade");
    buttonAumentar.classList.add(classAtivo);
    buttonDiminuir.classList.add(classAtivo);
    contadorDeItens.classList.add(classAtivo);
};
