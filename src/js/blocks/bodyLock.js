import { burgerButton } from "./sidebarSetup"

export function setupBodyLock() {
  const body = document.querySelector('body')
  const sidebarButton = document.querySelector('.sidebar-menu__burger-button')

  burgerButton.addEventListener('click', () => {
    body.classList.toggle('body__lock')
  })

  sidebarButton.addEventListener('click', () => {
    body.classList.remove('body__lock')
  })
}