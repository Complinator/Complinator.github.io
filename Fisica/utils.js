var tab = document.getElementById("tab");
var trigger = document.getElementById("scroll");

tab.style.right = '-310px';
trigger.onclick = function () {
    if (tab.style.right == '-310px') {
        tab.style.right = '0px';
    }
else {
    tab.style.right = '-310px';
}
}