/* THARZ_37 — Mobile navigation toggle
   Accessible hamburger menu: toggles the primary nav, updates
   ARIA state, swaps the icon, and closes on link selection. */
(function () {
    var toggles = document.querySelectorAll('.nav-toggle');
    toggles.forEach(function (btn) {
        var menu = document.getElementById(btn.getAttribute('aria-controls'));
        if (!menu) return;

        btn.addEventListener('click', function () {
            var open = menu.classList.toggle('nav-open');
            btn.setAttribute('aria-expanded', open ? 'true' : 'false');
            var icon = btn.querySelector('i');
            if (icon) icon.className = open ? 'fas fa-times' : 'fas fa-bars';
        });

        menu.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                menu.classList.remove('nav-open');
                btn.setAttribute('aria-expanded', 'false');
                var icon = btn.querySelector('i');
                if (icon) icon.className = 'fas fa-bars';
            });
        });
    });
})();
