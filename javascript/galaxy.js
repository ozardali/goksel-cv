const btn = document.querySelector(".btn-toggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
    $(".galaxy").show();
    $("#theme-icon").addClass("fa-cloud-sun");
    document.body.classList.toggle("dark-theme");
} else if (currentTheme == "light") {
    $(".galaxy").hide();
    $("#theme-icon").addClass("fa-meteor");
    document.body.classList.toggle("light-theme");
}

btn.addEventListener("click", function () {
    if (prefersDarkScheme.matches) {
        document.body.classList.toggle("light-theme");
        var theme = document.body.classList.contains("light-theme")
            ? "light"
            : "dark";
    } else {
        document.body.classList.toggle("dark-theme");
        var theme = document.body.classList.contains("dark-theme")
            ? "dark"
            : "light";
    }
    localStorage.setItem("theme", theme);
    if (theme == "light") {
        $(".galaxy").hide();
        $("#theme-icon").addClass("fa-meteor").removeClass("fa-cloud-sun");
    } else {
        $(".galaxy").show();
        $("#theme-icon").addClass("fa-cloud-sun").removeClass("fa-meteor");
    }
});
