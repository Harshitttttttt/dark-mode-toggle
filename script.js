$(document).ready(function () {
  const currentTheme = localStorage.getItem("theme") || "light";
  $("html").attr("data-theme", currentTheme);

  $("#theme-toggle").on("click", function () {
    const theme = $("html").attr("data-theme") === "light" ? "dark" : "light";
    $("html").attr("data-theme", theme);
    localStorage.setItem("theme", theme);
  });
});
