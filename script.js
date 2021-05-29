const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circle = document.querySelectorAll('.circle');


let currentActive = 1;

next.addEventListener('click', function() {

    if(currentActive<circle.length) {
        currentActive++;
    }

    console.log(currentActive);

    update();
    

})

prev.addEventListener('click', function() {

    if(currentActive>1) {
        currentActive--;
    }

    console.log(currentActive);

    update();

})


function update() {

    for(let i=0;i<circle.length;i++) {

        if(i<currentActive) circle[i].classList.add('active');
        else circle[i].classList.remove('active');

    }

    const actives = document.querySelectorAll('.active');

    let width = ((actives.length-1)/(circle.length-1))*100;

    progress.style.width = width + '%';

    if(currentActive===1) {
        prev.disabled = true;
    } else prev.disabled = false;

    if(currentActive===circle.length) {
        next.disabled = true;
    } else next.disabled = false;

}

