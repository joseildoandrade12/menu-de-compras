import initChangeImage from "./changeImage.js";
import createItensMenu from "./createItensMenu.js";
import initButtonAdd from "./handleButtonAdd.js";
import addEventsButtonAdd from "./addEventsButtonAdd.js";

export default async function initContentCard() {
    const puxarDados = async () => {
        try {
            const dadosResponse = await fetch("data.json");
            const dadosJson = await dadosResponse.json();
            inserirDados(dadosJson);
        } catch (erro) {
            console.log(erro);
        }
    };
    puxarDados();

    const inserirDados = (dadosJson) => {
        dadosJson.forEach((dado, index) => {
            const section = createItensMenu(dado);
            section.setAttribute("id", index + 1);
            const imagem = section.querySelector(".container-imagem img");
            const { image, name } = dado;
            initChangeImage(imagem, image, name);
            initButtonAdd();
        });
        addEventsButtonAdd();
    };
}
