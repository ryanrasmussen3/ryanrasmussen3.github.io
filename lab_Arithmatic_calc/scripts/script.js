let setData  = [];

function arithiticMean() {
    let mean = 0;
    for (i = 0; i < setData.length; i++) {
        mean += setData[i] / setData.length;
    }
    document.getElementById("currentMean").innerHTML = "Current Mean";
        document.getElementById("mean").innerHTML = mean;

}

function addValue() {
    let tempAdd = document.getElementById("newValue").value;
    //console.log(tempAdd);
    if (isNaN(tempAdd)) {
        prompt("Not a valid number!");
    }
    else {
        setData.push(tempAdd);
        document.getElementById("dataSet").innerHTML = setData;
        //console.log(setData.length);
    }
    arithiticMean();
}

function removeValue() {
    let tempRemove = document.getElementById("newValue").value;
    if (isNaN(tempRemove)) {
        prompt("Not a valid number!");
    }
    else {
            if (setData.includes(tempRemove)) {
                let index = setData.indexOf(tempRemove);
                if (index !== -1) {
                    setData.splice(index, 1);
                    //document.getElementById("dataset").innerHTML = setData;
                }     
            }
            else {
                alert("Not in Dataset!");
            }  
        }
    document.getElementById("dataSet").innerHTML = setData;
    arithiticMean();
}



