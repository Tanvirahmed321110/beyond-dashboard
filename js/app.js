

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


// progress
// Create a Circle ProgressBar
var circle = new ProgressBar.Circle('#progress-circle', {
    color: '#4e73df',
    strokeWidth: 8,
    duration: 1400, // Animation duration in ms
    easing: 'bounce',
    text: {
        autoStyleContainer: false
    },
    from: { color: '#4e73df', width: 8 },
    to: { color: '#4e73df', width: 8 },
    step: function (state, circle) {
        circle.path.setAttribute('stroke', state.color);
        var value = Math.round(circle.value() * 100);
        if (value === 0) {
            circle.setText('');
        } else {
            circle.setText(value + '%');
        }
    }
});

// Set the progress dynamically
circle.animate(0.75);  // Example: Animate to 75%
