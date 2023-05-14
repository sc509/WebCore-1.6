export function setupSidebar() {
  const menu = document.querySelector('.sidebar')
   const burgerButton = document.querySelector('.menu__burger-button')
  const closeSidebarButton = document.querySelector('.sidebar-menu__burger-button')

  burgerButton.addEventListener('click', () => {
    menu.classList.toggle('sidebar--active')
  })

  closeSidebarButton.addEventListener('click', () => {
    menu.classList.remove('sidebar--active')
  })

  menu.addEventListener('click', (event) => {
    if (event.target.classList.contains('sidebar--active')) {
      menu.classList.remove('sidebar--active')
    }
  })
}
export const burgerButton = document.querySelector('.menu__burger-button');
