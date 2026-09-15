(function () {
    "use strict";

    /* ---------- Style switcher ---------- */

    var link = document.getElementById("page-style");
    var toggle = document.getElementById("styleToggle");
    var valueEl = document.getElementById("styleToggleValue");

    function currentStyle() {
        return link.getAttribute("href").indexOf("style2") !== -1 ? "style2" : "style1";
    }

    function renderToggle() {
        var next = currentStyle() === "style1" ? "2" : "1";
        valueEl.textContent = "0" + next;
        toggle.setAttribute(
            "aria-label",
            "Switch to Style " + next + " (currently Style " + (next === "1" ? "2" : "1") + ")"
        );
    }

    if (link && toggle && valueEl) {
        toggle.addEventListener("click", function () {
            var next = currentStyle() === "style1" ? "style2" : "style1";
            link.setAttribute("href", next + ".css");
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
