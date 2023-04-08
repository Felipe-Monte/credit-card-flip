
const front = document.querySelector('.credit-card #front')
const back = document.querySelector('.credit-card #back ')


front.addEventListener('click', function () {
  front.classList.add('flip')
  back.classList.add('flip-2')
})

back.addEventListener('click', function () {
  front.classList.remove('flip')
  back.classList.remove('flip-2')
})