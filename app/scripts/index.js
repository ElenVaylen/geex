import anime from 'animejs'

import '../sections/starting/starting'
import '../styles/main.scss'

if (process.env.NODE_ENV !== 'production') {
  require('../index.pug')
}

document.addEventListener('DOMContentLoaded', function () {
  const timeline = anime.timeline({
    autoplay: true,
    duration: 1000,
    easing: 'easeInOutSine',
    direction: 'reverse',
    complete: function (anim) {
      anim.pause()
    }
  })
  timeline
    .add({
      targets: '.preview-img__1, .preview-img__2, .preview-img__3-img',
      scale: [1, 0.8],
      opacity: [1, 0.5],
      easing: 'easeInOutQuad',
      duration: 1000,
      delay: (el, i) => 100 * i
    })
})

const suviAnime = anime({
  targets: '.preview-title__1',
  translateX: '100vw',
  direction: 'reverse',
  easing: 'easeInOutQuad',
  delay: 200,
  autoplay: false,
  complete: function (anim) {
    anim.pause()
  }
})

const koponenAnime = anime({
  targets: '.preview-title__2',
  translateX: '100vw',
  direction: 'reverse',
  easing: 'easeInOutQuad',
  delay: 400,
  autoplay: false,
  complete: function (anim) {
    anim.pause()
  }
})

const startingAnime = anime({
  targets: '.starting-center',
  translateX: '-20vw',
  direction: 'reverse',
  autoplay: false,
  easing: 'linear',
  duration: 1000,
  complete: function (anim) {
    anim.pause()
  }
})

const scrollAnime = (finished = false, element, animation, name) => {
  let storage = localStorage.getItem('finishAnime')
  let storageName = null
  if (storage) {
    storageName = JSON.parse(storage)[name]
  }
  if (storageName) {
    return false
  }
  let innerHeight = window.innerHeight
  let visible = element.getBoundingClientRect().top <= innerHeight && element.getBoundingClientRect().top >= -innerHeight
  if (visible && (finished !== true)) {
    animation.play()
    if (storage) {
      localStorage.setItem('finishAnime', JSON.stringify({ ...JSON.parse(storage), [name]: true }))
    } else {
      localStorage.setItem('finishAnime', JSON.stringify({ [name]: true }))
    }
  }
}
document.addEventListener('DOMContentLoaded', function () {
  localStorage.clear()
  scrollAnime(false, document.querySelector('.starting-center'), startingAnime, 'startingAnime')
  scrollAnime(false, document.querySelector('.preview-title__1'), suviAnime, 'suviAnime')
  scrollAnime(false, document.querySelector('.preview-title__2'), koponenAnime, 'koponenAnime')
})
document.addEventListener('scroll', function () {
  scrollAnime(false, document.querySelector('.starting-center'), startingAnime, 'startingAnime')
  scrollAnime(false, document.querySelector('.preview-title__1'), suviAnime, 'suviAnime')
  scrollAnime(false, document.querySelector('.preview-title__2'), koponenAnime, 'koponenAnime')
})
