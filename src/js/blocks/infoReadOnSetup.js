import { setListener } from "./setListener"


export function setupInfoReadOn() {
  const infoReadOnButton = document.querySelector('.info__read-on')
  const infoTextList = document.querySelector('.info__description--size')
  const infoReadOnText = infoReadOnButton.textContent

  infoReadOnButton.addEventListener('click', () => {
    if (infoReadOnButton.classList.contains('info__read-on--hide')) {
      infoTextList.classList.remove('info__description--size-none')

      infoReadOnButton.textContent = infoReadOnText
      infoReadOnButton.classList.remove('info__read-on--hide')
      infoReadOnButton.classList.remove('info__read-on--rotate')
    } else {
      infoTextList.classList.add('info__description--size-none')

      infoReadOnButton.textContent = 'Скрыть'
      infoReadOnButton.classList.add('info__read-on--hide')
      infoReadOnButton.classList.add('info__read-on--rotate')
    }
  })

  const infoHideButton = document.querySelector('.info__read-on--hide')
  setListener(infoHideButton, 'click', () => {
    infoHideButton.addEventListener('click', () => {
      infoTextList.classList.remove('info__description--size-none')

      infoReadOnButton.textContent = infoReadOnText
      infoReadOnButton.classList.remove('info__read-on--hide')
      infoReadOnButton.classList.remove('info__read-on--rotate')
    })
  })
}