import { Select } from "./utilitarianFunctions.js";

function scrollSmooth(event) {
    event.preventDefault();
    const hrefLinks = this.getAttribute("href");
    const sectionLink = Select.Single(hrefLinks);

    sectionLink.scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
}

export default function initScrollSmooth() {
    const linksHeader = Select.All('[data-scroll="behavior"] a[href^="#"]');

    if(linksHeader) {
        linksHeader.forEach((linkHeader) => {
            linkHeader.addEventListener("click", scrollSmooth);
        });
    }
}