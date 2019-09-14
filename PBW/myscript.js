function calculateM() {
    let a = document.getElementById("number").value;
    let b = parseInt(a);
    document.getElementById("weight").innerHTML = b + 10 + ' kg';
    document.getElementById("calcpbm").innerHTML = "Calculated PBW for male patient";
}

function calculateF() {
    let a = document.getElementById("number").value;
    let b = parseInt(a);
    document.getElementById("weight").innerHTML = b + 2 + ' kg';
    document.getElementById("calcpbm").innerHTML = "Calculated PBW for female patient";
}

function changecol(value) {
    let color = document.body.style.backgroundColor;
    switch (value) {
        case 'm':
            color = "#cbe8f7";
            break;
        case 'f':
            color = "#f0daec";
            break;

    }
    document.body.style.backgroundColor = color;
}
