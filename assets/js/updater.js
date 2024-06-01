document.addEventListener('DOMContentLoaded', function() {
    var updateIncrement = localStorage.getItem("updateincrement") || 0;
    localStorage.setItem("updateincrement", parseInt(updateIncrement) + 1);
    var iframe = document.getElementById("updater");
    iframe.src = "assets/js/service-worker.js?v=" + localStorage.getItem("updateincrement");

    iframe.addEventListener('load', function() {
        setTimeout(function() {
            window.history.back();
        }, 1000);
    });
});
