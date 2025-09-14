const pi = 3.14159265;
function circle() {
    let radius = document.getElementById("radius").value;
    let resultOne = 2 * pi * parseFloat(radius);
    let resultTwo = pi * Math.pow(parseFloat(radius), 2);
    document.getElementById("perimeter").textContent = resultOne;
    document.getElementById("area").textContent = resultTwo;
}

function cylinder() {
    let radius = document.getElementById("radiusOne").value;
    let height = document.getElementById("height").value;
    let resultThree = pi * Math.pow(parseFloat(radius), 2) * parseFloat(height);
    document.getElementById("volume").textContent = resultThree;
}