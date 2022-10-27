var tab = document.getElementById("tab");
var trigger = document.getElementById("scroll");

tab.style.top = '-60vh';
trigger.onclick = function () {
    if (tab.style.top == '-60vh') {
        tab.style.top = '9.9vh';
    }
else {
    tab.style.top = '-60vh';
}
}