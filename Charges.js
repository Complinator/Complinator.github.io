var trigger = document.getElementById("Trigger");
var Fig2 = document.getElementById("Figure2");

function generateRandomIntegerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

trigger.onclick = function () {
    removeElementsByClass("container", 0);
    const pos = [];
    for (let val = generateRandomIntegerInRange(4, 8); val > 0; val--) {
        const div = document.createElement("div");
        const img = document.createElement("img");
        let row = generateRandomIntegerInRange(1, 5);
        let col = generateRandomIntegerInRange(1, 5);
        let particle = generateRandomIntegerInRange(1, 2);
        div.setAttribute("style", "width: 100%; background-color: rgba(0, 0, 0, 0); grid-column: " + col + "; grid-row: " + row + ";");
        img.setAttribute("style", "width: 50%; background-color: rgba(0, 0, 0, 0); animation-name: PMove; animation-duration: 1s; animation-iteration-count: infinite;");
        img.classList.add("Particle");
        div.classList.add("container");
        const cords = [col, row];
        if (particle == 1){
            img.setAttribute("src", "Img/PosParticle.png");
            div.classList.add("PosParticle");
        }
        else if (particle == 2){
            img.setAttribute("src", "Img/NegParticle.png");
            div.classList.add("NegParticle");
        }
        div.append(img);
        if (pos.includes(JSON.stringify(cords)) == false){
            Fig2.append(div);
            pos[pos.length] = JSON.stringify(cords);
        }
        else {
        }
    }
    LineManipulation2(xval);
}