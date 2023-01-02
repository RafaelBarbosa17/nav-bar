
const list = document.querySelectorAll('.nav-li');
const indicator = document.querySelector('.indicator');

const changeIndexI = () => {
    for (let i = 0; i <= list.length - 1; i++) {
        if (list[i].classList.contains('active')) {
            indicator.style.transform = `translateY(-20px) translateX(${i * 86 + 17}px)`
        }
    }
}

changeIndexI()

function activeLink() {
    list.forEach(item => item.classList.remove('active'));
    this.classList.add('active');
}

list.forEach(item => {
    item.addEventListener('click', activeLink)
    item.addEventListener('click', changeIndexI)
})


