const palette1Btn = document.getElementById('palette1');
const palette2Btn = document.getElementById('palette2');
const palette3Btn = document.getElementById('palette3');
const header = document.getElementById('my-header');
const BE = document.getElementById('bigent');
const invo = document.querySelectorAll('#involvement > div');
const job = document.getElementById('jobs');
const colorSec = document.getElementById('color');

palette1Btn.addEventListener('click', function () {
    header.style.backgroundColor = '#92e6f0';
    BE.style.backgroundColor = '#93cdf0';
    BE.style.borderLeft = '5px solid darkcyan';
    invo.forEach(function (div) {
        div.style.backgroundColor = '#5cb3e9';
        div.style.boxShadow = '1px 1px 10px #5cb3e9';
    });
    job.style.backgroundColor = '#93cdf0';
    job.style.borderLeft = '5px solid darkcyan';
    colorSec.style.backgroundColor = '#93cdf0';
    colorSec.style.borderLeft = '5px solid darkcyan';
});
palette2Btn.addEventListener('click', function () {
    header.style.backgroundColor = '#FF999A';
    BE.style.backgroundColor = '#FF999A';
    BE.style.borderLeft = '5px solid darkred';
    invo.forEach(function (div) {
        div.style.backgroundColor = '#D61518';
        div.style.boxShadow = '1px 1px 10px #D61518';
        div.style.color = '#ffff';
    });
    job.style.backgroundColor = '#FF999A';
    job.style.borderLeft = '5px solid darkred';
    colorSec.style.backgroundColor = '#FF999A';
    colorSec.style.borderLeft = '5px solid darkred';
});
palette3Btn.addEventListener('click', function () {
    header.style.backgroundColor = '#FFF980';
    BE.style.backgroundColor = '#FFF980';
    BE.style.borderLeft = '5px solid #827C00';
    invo.forEach(function (div) {
        div.style.backgroundColor = '#D1C92E';
        div.style.boxShadow = '1px 1px 10px #D1C92E';
        div.style.color = 'black';
    });
    job.style.backgroundColor = '#FFF980';
    job.style.borderLeft = '5px solid #827C00';
    colorSec.style.backgroundColor = '#FFF980';
    colorSec.style.borderLeft = '5px solid #827C00';
});