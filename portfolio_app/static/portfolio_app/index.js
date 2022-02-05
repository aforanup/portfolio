const loadNew = document.querySelector('.number-loading')
const bg = document.querySelector('.bg')
const nextButton = document.querySelector('.next')

let load = 0

let time_interval = setInterval(blurred, 15)

function blurred(){
    load++;

    if(load == 150){
        clearInterval(time_interval)
    }
    
    loadNew.innerText = `${load}%`
    loadNew.style.opacity = scale(load, 0, 100, 1, 0)
    loadNew.style.fontSize = `${scale(load, 0, 100, 40, 500)}px`

    if(load==100){
        loadNew.remove()
    }

    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
    nextButton.style.opacity = scale(load, 101, 150, 0, 1)
}

const scale = function(num, in_min, in_max, out_min, out_max) {
    return (num-in_min) * (out_max-out_min) / (in_max-in_min) +out_min;
}
