

// menu btn
const btn = document.getElementById('menu-btn');
const menuSidebar = document.getElementById('menu-sidebar');
let toggle = false

btn.addEventListener('click', function () {
    const icon = btn.querySelector('i');
    menuSidebar.classList.toggle('active');

    // toggle icon
    if (!toggle) {
        icon.classList.remove('ri-menu-line')
        icon.classList.add('ri-close-line');
    }
    else {
        icon.classList.add('ri-menu-line')
        icon.classList.remove('ri-close-line')
    }

    toggle = !toggle

});