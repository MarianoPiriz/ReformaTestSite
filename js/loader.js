const loader = document.querySelector(".loader");
const maincontent = document.querySelector(".maincontent");

function init() {
  setTimeout(() => (loader.style.opacity = 0), 5000);
  setTimeout(() => {
    loader.style.display = "none";

    maincontent.style.display = "block";

    setTimeout(() => (maincontent.style.opacity = 1), 500);
  }, 6000);
}

init();
