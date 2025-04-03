export default function initChangeImage(img, { desktop, mobile, tablet }, name) {
    img.setAttribute("alt", name);

    function toChangeImage() {
        const tamanhoJanela = window.innerWidth;
        if (tamanhoJanela > 1280) {
            img.setAttribute("src", desktop);
        } else if (tamanhoJanela > 940) {
            img.setAttribute("src", tablet);
        } else {
            img.setAttribute("src", mobile);
        }
    }
    toChangeImage();
    window.addEventListener("resize", toChangeImage);
}
