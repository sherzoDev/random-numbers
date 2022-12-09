const $btn = document.querySelector(".btn");
const $list = document.querySelector(".list");

$btn.addEventListener("click", function (evt) {
    evt.preventDefault();

    $list.innerHTML = Math.floor(Math.random() * 101);
});