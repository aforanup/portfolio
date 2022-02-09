const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const slidesLength = slideRight.querySelectorAll('div').length

let load = 0
let time_interval = setInterval(blurred, 15)

function blurred(){
    load++;

    if(load == 100){
        clearInterval(time_interval)
    }
    
    // loadNew.innerText = `${load}%`
    // loadNew.style.opacity = scale(load, 0, 100, 1, 0)
    // loadNew.style.fontSize = `${scale(load, 0, 100, 40, 500)}px`
    sliderContainer.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
    sliderContainer.style.opacity = scale(load, 0, 100, 0, 1)
}

const scale = function(num, in_min, in_max, out_min, out_max) {
    return (num-in_min) * (out_max-out_min) / (in_max-in_min) +out_min;
}


let activeSlideIndex = 0

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`

upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight
    if(direction === 'up') {
        activeSlideIndex++
        if(activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0
        }
    } else if(direction === 'down') {
        activeSlideIndex--
        if(activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1
        }
    }

    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}