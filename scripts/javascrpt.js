const calc = (radius) => {
    if (typeof(radius) !== 'number') {
        throw Error('The given argument is not a number');
      }
    return Math.round(Math.PI * radius * radius * 100) / 100;
}
/*window.addEventListener('load', (event) => {
    if (localStorage.getItem('radius')) {
        document.getElementById('radius').value = parseInt(localStorage.radius)
    }
});*/
document.querySelector('#calculate').addEventListener('click', () => {
    origCount=0;
    const ct = origCount + 1;
    localStorage.setItem('countOfClicks', ct)
    origCount = parseFloat(localStorage.getItem('countOfClicks')) || 0
    const radius = parseFloat(document.querySelector("#radius").value);
    localStorage.setItem('radi', radius); 
    const result = `${calc(localStorage.getItem('radi'))}`   
    document.querySelector("#result").innerHTML = '    Area of circle is  ' + result;
    document.querySelector("#result2").innerHTML='This has been calculated ' + ct + ' times';
})