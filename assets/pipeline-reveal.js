(function () {
    "use strict";

    var stages = document.querySelectorAll(".stage");
    if (!stages.length) return;

    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !("IntersectionObserver" in window)) return;

    var observer = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-revealed");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.2, rootMargin: "0px 0px -40px 0px" }
    );

    stages.forEach(function (stage, i) {
        stage.classList.add("js-observing");
        stage.style.transitionDelay = i * 90 + "ms";
        observer.observe(stage);
    });
})();
