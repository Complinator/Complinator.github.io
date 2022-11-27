var Im = document.getElementById("im2");
var Txt = document.getElementById("Charge2");
var Pos = document.getElementsByClassName("PosParticle");
var Neg = document.getElementsByClassName("NegParticle");
const sub = document.createElement("sub");
var xval = 2;

function LineManipulation2(x) {
    const CHpos = [];
    const QCharge = [];
    var TotCharge = 0;
    if (typeof x.value == "undefined"){
        xval = x;
    }
    else{
        xval = x.value;
    }

    if (Neg.length > 0){
        for (let i = 0; i < Neg.length; i++){
            CHpos[i] = JSON.stringify([parseInt(Neg[i].style.gridColumn[0]), parseInt(Neg[i].style.gridRow[0])]);
            QCharge[i] = -1;
        }
    }

    if (Pos.length > 0){
        for (let i = 0; i < Pos.length; i++){
            CHpos[i + Neg.length] = JSON.stringify([parseInt(Pos[i].style.gridColumn[0]), parseInt(Pos[i].style.gridRow[0])]);
            QCharge[i + Neg.length] = 1;
        }
    }

    if (xval == 1){
        Im.style.gridColumn = "3";
        Im.style.gridRow = "3";
        var GridSpace = [];
        GridSpace[0] = JSON.stringify([3, 3]);
    }

    else if (xval == 2){
        Im.style.gridColumn = "2/5";
        Im.style.gridRow = "2/5";
        var GridSpace = [];
        var m = 0;
        for (let i = 2; i <= 4; i++){
            for (let n = 2; n <= 4; n++){
                GridSpace[m] = JSON.stringify([i, n]);
                m += 1;
            }
        }
    }

    else if (xval == 3){
        Im.style.gridColumn = "1/6";
        Im.style.gridRow = "1/6";
        var GridSpace = [];
        var m = 0;
        for (let i = 1; i <= 5; i++){
            for (let n = 1; n <= 5; n++){
                if ([JSON.stringify([1, 1]), JSON.stringify([1, 5]), JSON.stringify([5, 1]), JSON.stringify([5, 5])].includes(JSON.stringify([i, n])) == false){
                    GridSpace[m] = JSON.stringify([i, n]);
                    m += 1;
                }
            }
        }
    }
    for (i = 0; i < QCharge.length; i++){
        if (GridSpace.includes(CHpos[i])){
            TotCharge += QCharge[i];
        }
    }
    Txt.innerText = "Q"
    sub.innerText = "e"
    Txt.append(sub)
    Txt.append(" = " + TotCharge +"Q [C]")
}