import { Select } from "./utilitarianFunctions.js";

export default function initScrollSmooth() {
    const linksHeader = Select.All('[data-scroll="behavior"] a[href^="#"]');

    if(linksHeader) {
        function scrollSmooth(event) {
            event.preventDefault();
            const hrefLinks = this.getAttribute("href");
            const sectionLink = Select.Single(hrefLinks);

            sectionLink.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }

        linksHeader.forEach((linkHeader) => {
            linkHeader.addEventListener("click", scrollSmooth);
        });
    }
}