/*
 * Blocking, render-critical: swaps the stylesheet href to the saved
 * preference before first paint so there is no flash of the wrong style.
 * Must be loaded synchronously, immediately after the <link id="page-style">.
 */
(function () {
    try {
        if (localStorage.getItem("site-style") === "style2") {
            document.getElementById("page-style").setAttribute("href", "style2.css");
        }
    } catch (e) {}
})();
