// side Bar 
$(document).ready(function () {
    $("#menu-icon").on("click", function () {
        $("#sidebar").toggleClass("open");
        $(this).toggleClass("active");
    });

    $("#close-btn").on("click", function () {
        $("#sidebar").removeClass("open");
        $("#menu-icon").removeClass("active");
    });

    $(document).on("click", function (event) {
        if (!$(event.target).closest("#sidebar, #menu-icon").length) {
            $("#sidebar").removeClass("open");
            $("#menu-icon").removeClass("active");
        }
    });
});


