var Fig = document.getElementById("Figure");
var Charge = document.getElementById("Charge");

function removeElementsByClass(className, iter){
    const elements = document.getElementsByClassName(className);
    while(elements.length > iter){
        elements[elements.length - 1].parentNode.removeChild(elements[elements.length - 1]);
    }
}

function LineManipulation(x) {
    const countpos = document.querySelectorAll('.poslines').length;
    const countneg = document.querySelectorAll('.neglines').length;
    const im1 = document.createElement("img");
    const im2 = document.createElement("img");
    const im3 = document.createElement("img");
    const im4 = document.createElement("img");
    im1.setAttribute("src", "Img/Line.png");
    im2.setAttribute("src", "Img/Line.png");
    im3.setAttribute("src", "Img/Line.png");
    im4.setAttribute("src", "Img/Line.png");

    if (x.value == 1) {
        Charge.innerText = "Carga = Q [C]"
        if (countpos >= 4) {
            removeElementsByClass("poslines", 4)
        }
        else {
            im1.setAttribute("style", "grid-column: 5; grid-row: 3");
            im2.setAttribute("style", "grid-column: 1; grid-row: 3; transform: rotate(180deg)");
            im3.setAttribute("style", "grid-column: 3; grid-row: 5; transform: rotate(90deg)");
            im4.setAttribute("style", "grid-column: 3; grid-row: 1; transform: rotate(-90deg)");
            im1.classList.add("poslines");
            im2.classList.add("poslines");
            im3.classList.add("poslines");
            im4.classList.add("poslines");
            Fig.append(im1);
            Fig.append(im2);
            Fig.append(im3);
            Fig.append(im4);
            removeElementsByClass("neglines", 0)
        }
    }

    else if (x.value == 2 && countpos < 8){
        Charge.innerText = "Carga = 2Q [C]"
        im1.setAttribute("style", "grid-column: 1; grid-row: 1; transform: rotate(225deg)");
        im2.setAttribute("style", "grid-column: 5; grid-row: 1; transform: rotate(-45deg)");
        im3.setAttribute("style", "grid-column: 1; grid-row: 5; transform: rotate(135deg)");
        im4.setAttribute("style", "grid-column: 5; grid-row: 5; transform: rotate(45deg)");
        im1.classList.add("poslines");
        im2.classList.add("poslines");
        im3.classList.add("poslines");
        im4.classList.add("poslines");
        Fig.append(im1);
        Fig.append(im2);
        Fig.append(im3);
        Fig.append(im4);
    }

    else if (x.value == -1){
        Charge.innerText = "Carga = -Q [C]"
        if (countneg >= 4) {
            removeElementsByClass("neglines", 4)
        }

        else{
            im1.setAttribute("style", "grid-column: 2; grid-row: 3;");
            im2.setAttribute("style", "grid-column: 4; grid-row: 3; transform: rotate(180deg)");
            im3.setAttribute("style", "grid-column: 3; grid-row: 2; transform: rotate(90deg)");
            im4.setAttribute("style", "grid-column: 3; grid-row: 4; transform: rotate(-90deg)");
            im1.classList.add("neglines");
            im2.classList.add("neglines");
            im3.classList.add("neglines");
            im4.classList.add("neglines");
            Fig.append(im1);
            Fig.append(im2);
            Fig.append(im3);
            Fig.append(im4);
        }
    }

    else if (x.value == -2 && countneg < 8){
        Charge.innerText = "Carga = -2Q [C]"
        im1.setAttribute("style", "grid-column: 4; grid-row: 4; transform: rotate(225deg)");
        im2.setAttribute("style", "grid-column: 2; grid-row: 4; transform: rotate(-45deg)");
        im3.setAttribute("style", "grid-column: 4; grid-row: 2; transform: rotate(135deg)");
        im4.setAttribute("style", "grid-column: 2; grid-row: 2; transform: rotate(45deg)");
        im1.classList.add("neglines");
        im2.classList.add("neglines");
        im3.classList.add("neglines");
        im4.classList.add("neglines");
        Fig.append(im1);
        Fig.append(im2);
        Fig.append(im3);
        Fig.append(im4);
    }

    else if (x.value == 0) {
        Charge.innerText = "Carga = 0 [C]"
        removeElementsByClass("poslines", 0)
        removeElementsByClass("neglines", 0)
    }
}