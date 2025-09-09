function lightMode() {
    document.getElementById('mainPage').style = "background-color: white; color: black;";
    document.getElementById('heading1').style = "background-color: white; color: black; border: 2px black;";
    document.getElementById('heading2').style = "background-color: white; color: black; border: 2px black;";
    document.getElementById('heading3').style = "background-color: white; color: black; border: 2px black;";
    document.getElementById('para').style = "color: black;";
    document.getElementById('para2').style = "color: black;";
    document.getElementById('para3').style = "color: black;";
    document.getElementById('colors').innerHTML = "Light";
}

function darkMode() {
    document.getElementById('mainPage').style = "background-color: black; color: white;";
    document.getElementById('heading1').style = "background-color: black; color: white; border: 2px black;";
    document.getElementById('heading2').style = "background-color: black; color: white; border: 2px black;";
    document.getElementById('heading3').style = "background-color: black; color: white; border: 2px black;";
    document.getElementById('para').style = "color: white;";
    document.getElementById('para2').style = "color: white;";
    document.getElementById('para3').style = "color: white;";
    document.getElementById('colors').innerHTML = "Dark";
}

function defultMode() {
    document.getElementById('mainPage').style = "background-color: #1E0100;";
    document.getElementById('heading1').style = "background-color: #8A221D; color: #610A05; border: 2px #610A05; border-radius: 4px;";
    document.getElementById('heading2').style = "background-color: #8A221D; color: #610A05; border: 2px #610A05; border-radius: 4px;";
    document.getElementById('heading3').style = "background-color: #8A221D; color: #610A05; border: 2px #610A05; border-radius: 4px;";
    document.getElementById('para').style = "color= #610A05";
    document.getElementById('para2').style = "color= #610A05";
    document.getElementById('para3').style = "color= #610A05";
    document.getElementById('colors').innerHTML= "Default";
}