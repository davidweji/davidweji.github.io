const palette1Btn = document.getElementById('palette1');
const palette2Btn = document.getElementById('palette2');
const palette3Btn = document.getElementById('palette3');
const header = document.getElementById('my-header');
const myCareer = document.getElementById('MyCareer');
const backup = document.getElementById('backup');
const hope = document.getElementById('hopes');
const color = document.getElementById('color');

palette1Btn.addEventListener('click', function () {
    header.style.backgroundColor = '#92e6f0';
    myCareer.style.backgroundColor = '#93cdf0';
    myCareer.style.borderLeft = '5px solid darkcyan';
    backup.style.backgroundColor = '#93cdf0';
    backup.style.borderLeft = '5px solid darkcyan';
    hope.style.backgroundColor = '#68adf4';
    hope.style.color = 'black';
    color.style.backgroundColor = '#93cdf0';
    color.style.borderLeft = '5px solid darkcyan';
});
palette2Btn.addEventListener('click', function () {
    header.style.backgroundColor = '#FF999A';
    myCareer.style.backgroundColor = '#FF999A';
    myCareer.style.borderLeft = '5px solid darkred';
    backup.style.backgroundColor = '#FF999A';
    backup.style.borderLeft = '5px solid darkred';
    hope.style.backgroundColor = '#D61518';
    hope.style.color = 'white';
    color.style.backgroundColor = '#FF999A';
    color.style.borderLeft = '5px solid darkred';
});
palette3Btn.addEventListener('click', function () {
    header.style.backgroundColor = '#FFF980';
    myCareer.style.backgroundColor = '#FFF980';
    myCareer.style.borderLeft = '5px solid #827C00';
    backup.style.backgroundColor = '#FFF980';
    backup.style.borderLeft = '5px solid #827C00';
    hope.style.backgroundColor = '#D1C92E';
    hope.style.color = 'black';
    color.style.backgroundColor = '#FFF980';
    color.style.borderLeft = '5px solid #827C00';
});