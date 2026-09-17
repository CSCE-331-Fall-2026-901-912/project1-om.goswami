/*
 * Blocking, render-critical: both stylesheets are linked in every page's
 * <head>; this enables the saved preference and disables the other one
 * before first paint so there is no flash of the wrong style.
 * Must be loaded synchronously, immediately after the two <link> tags.
 */
(function () {
    try {
        var style1 = document.getElementById("style1-sheet");
        var style2 = document.getElementById("style2-sheet");
        if (localStorage.getItem("site-style") === "style2") {
            style1.disabled = true;
            style2.disabled = false;
        }
    } catch (e) {}
})();
