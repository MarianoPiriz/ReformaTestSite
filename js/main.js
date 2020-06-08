window.addEventListener("resize", listenWindowSize);

function listenWindowSize() {
  var lht1 = document.getElementById("maintitle");
  var userAgent = navigator.userAgent;
  var hSize = screen.height;
  var wSize = screen.width;

  console.log(userAgent);

  console.log("Alto:", hSize);

  console.log("Ancho:", wSize);

  var logoInicio = document.getElementById("logoInicio");
  var subTitle = document.getElementById("subtitle");
  var footerContainer = document.getElementById("footerContainer");
  var mainNav = document.getElementById("mainNav");

  if (wSize <= 414) {
    lht1.style.lineHeight = "16vh";
    logoInicio.style.width = "17vw";
    subTitle.style.fontSize = "5vw";
    footerContainer.style.paddingBottom = "3%";
    footerContainer.style.paddingTop = "3%";
  }
  if (wSize >= 415 && wSize <= 736) {
    lht1.style.lineHeight = "50vh";
    logoInicio.style.width = "10vw";
    subTitle.style.fontSize = "3vw";
  }

  if (wSize >= 737 && wSize <= 1024) {
    lht1.style.lineHeight = "57vh";
    logoInicio.style.width = "8vw";
    subTitle.style.fontSize = "3vw";

    footerContainer.style.paddingBottom = "1%";
    footerContainer.style.paddingTop = "1%";
  }

  if (wSize > 1024) {
    lht1.style.lineHeight = "55vh";
    logoInicio.style.width = "6vw";
    subTitle.style.fontSize = "2.5vw";
    subTitle.style.marginTop = "1%";
  }
  if (userAgent.match(/iPad/i)) {
    lht1.style.lineHeight = "22vh";
    footerContainer.style.paddingBottom = "3%";
    footerContainer.style.paddingTop = "3%";
    subTitle.style.marginTop = "0";
    mainNav.style.height = "22vh";
  }

  if (wSize >= 1024 && wSize <= 1366 && hSize >= 768 && hSize <= 1024) {
    lht1.style.lineHeight = "40vh";
    footerContainer.style.paddingBottom = "1%";
    footerContainer.style.paddingTop = "1%";
    mainNav.style.height = "45vh";
  }
  if (userAgent.match(/iPad/i) && wSize >= 1024 && wSize <= 1366) {
    footerContainer.style.paddingBottom = "1%";
    footerContainer.style.paddingTop = "1%";
  }
}

listenWindowSize();

const mainNavOpen = document.querySelector("#mainNav");

const btnMenu = document.querySelector(".btn-menu");

btnMenu.addEventListener("click", () => {
  console.log("click");

  setTimeout(() => (mainNavOpen.style.display = "block"), 100);
  setTimeout(() => (mainNavOpen.style.transform = "translateY(0)"), 200);
});
