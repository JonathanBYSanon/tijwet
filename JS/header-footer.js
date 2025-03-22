window.addEventListener("load", () => {
    document.body.classList.add("visible");
  });

document.addEventListener("DOMContentLoaded", function () {
    const isIndex = window.location.pathname.includes("index") || window.location.pathname.endsWith("/");

    const basePath = isIndex ? "HTML/" : "../";

    fetch(`${basePath}COMPONENT/header.html`)
        .then(res => res.text())
        .then(html => {
            document.body.insertAdjacentHTML("afterbegin", html);
        });

    fetch(`${basePath}COMPONENT/footer.html`)
        .then(res => res.text())
        .then(html => {
            document.body.insertAdjacentHTML("beforeend", html);
            
            const footerImg = document.querySelector('footer img');
            if (footerImg) {
                footerImg.src = isIndex
                    ? "ASSETS/logo_jonathan_sanon.svg"
                    : "../../ASSETS/logo_jonathan_sanon.svg";
            }
        });
    
});
