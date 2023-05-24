const button = document.getElementById('gerar');

button.addEventListener('click', function() {
    const filme1 = document.getElementById('filme1').value;
    const filme2 = document.getElementById('filme2').value;

    let result = Math.floor(Math.random() * (2 - 1 + 1) +1);
    if (result == 1) {
        document.querySelector('#resultado > span').textContent = filme1;
    } if (result == 2) {
        document.querySelector('#resultado > span').textContent = filme2;
    }
    document.querySelector('#resultado > span').textContent = 'one piece';
});