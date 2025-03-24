let footerLinks =
[
    {
        "name": "Legal",
        "url": "legal.html",
        "folder": "INFO"
    },
    {
        "name": "About",
        "url": "about.html",
        "folder": "INFO"
    }
];

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
            const headerImg = document.querySelector('header img');
            if (headerImg) {
                headerImg.src = isIndex
                    ? "ASSETS/logo-TiJwet-white.svg"
                    : "../../ASSETS/logo-TiJwet-white.svg";
            }
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

            let footerSpan = document.querySelector("footer p span");
            footerLinks.forEach(link => {
                const a = document.createElement("a");
                a.href = isIndex
                    ? `HTML/${link.folder}/${link.url}`
                    : `../${link.folder}/${link.url}`;
                    a.textContent = link.name;
                
                footerSpan.appendChild(document.createTextNode(" · "));
                footerSpan.appendChild(a);
            });
        });
    
});


const toggleFullSCreenBtn = document.getElementById("fullscreen-toggle");

if (toggleFullSCreenBtn) {
  const icon = toggleFullSCreenBtn.querySelector("i");

  toggleFullSCreenBtn.addEventListener("click", () => {
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");
    const isFullscreen = header?.classList.contains("hidden");

    header?.classList.toggle("hidden");
    footer?.classList.toggle("hidden");

    // Change icon
    icon.className = isFullscreen ? "fas fa-expand" : "fas fa-compress";
  });
}

const toggleHowToBtn = document.getElementById("how-to-toggle");

if (toggleHowToBtn) {
    const icon = toggleHowToBtn.querySelector("i");
  
    toggleHowToBtn.addEventListener("click", () => {
      const howToSection = document.getElementById("how-to-play");
  
      const wasHidden = howToSection?.classList.contains("hidden");
      howToSection.className = wasHidden ? "" : "hidden";
  
      // Update icon based on new state
      icon.className = wasHidden ? "fa fa-times" : "fa fa-question-circle";
    });
  }
