const menuElement = document.getElementById('menu');
const links = document.getElementById('links');
const logo = document.getElementById('logo');

menuElement.addEventListener('click', () => {
    links.classList.toggle("flex");
    if (links.classList.contains("flex")) {
        logo.classList.add("hidden");
    } else {
        logo.classList.remove("hidden");
    }
});