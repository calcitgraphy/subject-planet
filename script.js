const action = document.getElementsByClassName('form-section-lable');
const nav = document.getElementById('nav');
const menu = document.getElementById('menu');
const cansel = document.getElementById('close');

for (i = 0; i < action.length; i++) {
    action[i].addEventListener('click', function () {
        this.classList.toggle('active')
        var panel = this.nextElementSibling;
        if (panel.style.display === "grid") {
            panel.style.display = "none";
        } else {
            panel.style.display = "grid";
        }
    })
}

menu.addEventListener('click', function () {
    nav.style.width = '100%';
})

cansel.addEventListener('click', function () {
    nav.style.width = '0';
})
