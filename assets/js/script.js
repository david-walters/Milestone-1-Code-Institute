// rotation for arrow icons on click of accordion dropdown

document.getElementById('btn-1').addEventListener('click', function () {
    var icon = this.querySelector('.arrow-one i.fas');
    icon.classList.toggle('rotate');
});

document.getElementById('btn-2').addEventListener('click', function () {
    var icon = this.querySelector('.arrow-two i.fas');
    icon.classList.toggle('rotate');
});

document.getElementById('btn-3').addEventListener('click', function () {
    var icon = this.querySelector('.arrow-three i.fas');
    icon.classList.toggle('rotate');
});

document.getElementById('btn-4').addEventListener('click', function () {
    var icon = this.querySelector('.arrow-four i.fas');
    icon.classList.toggle('rotate');
});
        