const palette1Btn = document.getElementById('palette1');
const palette2Btn = document.getElementById('palette2');
const palette3Btn = document.getElementById('palette3');
const header = document.getElementById('my-header');
const home = document.getElementById('home');
const aboutme = document.querySelectorAll('#aboutme_container > div');
const edu = document.getElementById('education');
const FO = document.getElementById('fieldoverview');
const colorSec = document.getElementById('color');


palette1Btn.addEventListener('click', function () {
    header.style.backgroundColor = '#92e6f0';
    home.style.backgroundColor = '#1b82c1';
    aboutme.forEach(function (div) {
        div.style.backgroundColor ='#92e6f0';
    });
    edu.style.backgroundColor = '#93cdf0';
    edu.style.borderLeft = '5px solid darkcyan';
    FO.style.backgroundColor = '#93cdf0';
    FO.style.borderLeft = '5px solid darkcyan';
    colorSec.style.backgroundColor = '#93cdf0';
    colorSec.style.borderLeft = '5px solid darkcyan';

});
palette2Btn.addEventListener('click', function () {
    header.style.backgroundColor = '#FF999A';
    home.style.backgroundColor = '#A33334';
    aboutme.forEach(function (div) {
        div.style.backgroundColor ='#FF999A';
    });
    edu.style.backgroundColor = '#FF999A';
    edu.style.borderLeft = '5px solid darkred';
    FO.style.backgroundColor = '#FF999A';
    FO.style.borderLeft = '5px solid darkred';
    colorSec.style.backgroundColor = '#FF999A';
    colorSec.style.borderLeft = '5px solid darkred';

});
palette3Btn.addEventListener('click', function () {
    header.style.backgroundColor = '#FFF980';
    home.style.backgroundColor = '#D1C92E';
    aboutme.forEach(function (div) {
        div.style.backgroundColor ='#FFF980';
    });
    edu.style.backgroundColor = '#FFF980';
    edu.style.borderLeft = '5px solid #827C00';
    FO.style.backgroundColor = '#FFF980';
    FO.style.borderLeft = '5px solid #827C00';
    colorSec.style.backgroundColor = '#FFF980';
    colorSec.style.borderLeft = '5px solid #827C00';
});