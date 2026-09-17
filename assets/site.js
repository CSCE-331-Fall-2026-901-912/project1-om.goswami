(function () {
    "use strict";

    /* ---------- Style switcher ---------- */

    var style1 = document.getElementById("style1-sheet");
    var style2 = document.getElementById("style2-sheet");
    var toggle = document.getElementById("styleToggle");
    var valueEl = document.getElementById("styleToggleValue");

    function currentStyle() {
        return style2 && !style2.disabled ? "style2" : "style1";
    }

    function renderToggle() {
        var next = currentStyle() === "style1" ? "2" : "1";
        valueEl.textContent = "0" + next;
        toggle.setAttribute(
            "aria-label",
            "Switch to Style " + next + " (currently Style " + (next === "1" ? "2" : "1") + ")"
        );
    }

    if (style1 && style2 && toggle && valueEl) {
        toggle.addEventListener("click", function () {
            var next = currentStyle() === "style1" ? "style2" : "style1";
            style1.disabled = next === "style2";
            style2.disabled = next === "style1";
            try {
                localStorage.setItem("site-style", next);
            } catch (e) {}
            renderToggle();
        });
        renderToggle();
    }

    /* ---------- Mobile navigation ---------- */

    var navToggle = document.querySelector(".nav-toggle");
    var nav = document.getElementById("site-nav");

    if (navToggle && nav) {
        navToggle.addEventListener("click", function () {
            var open = nav.classList.toggle("is-open");
            navToggle.setAttribute("aria-expanded", open ? "true" : "false");
        });

        nav.querySelectorAll("a").forEach(function (a) {
            a.addEventListener("click", function () {
                nav.classList.remove("is-open");
                navToggle.setAttribute("aria-expanded", "false");
            });
        });
    }

    /* ---------- Header scroll compaction ---------- */

    var header = document.querySelector(".site-header");
    if (header) {
        var ticking = false;
        var update = function () {
            header.classList.toggle("is-scrolled", window.scrollY > 24);
            ticking = false;
        };
        window.addEventListener(
            "scroll",
            function () {
                if (!ticking) {
                    requestAnimationFrame(update);
                    ticking = true;
                }
            },
            { passive: true }
        );
        update();
    }
})();
