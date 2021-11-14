var timeout;
function preload() {
    timeout = setTimeout(showPage, 150);
}
function showPage() {
    document.getElementById("preload").style.display = "block";
}