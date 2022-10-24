const action = document.getElementsByClassName('form-section-lable');

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