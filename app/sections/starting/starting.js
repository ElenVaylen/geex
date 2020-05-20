document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.starting-center__shape').addEventListener('click', function () {
    document.querySelector('.starting-center__photo').classList.remove('hide')
  })
  document.querySelector('.starting-center__photo-shape').addEventListener('click', function () {
    document.querySelector('.starting-center__photo').classList.add('hide')
  })
})
