export function setupCallModal() {
  const call = document.querySelector('.modal-call')
  const callButton = document.querySelector('.sidebar-menu__call-button')
  const closeCallButton = document.querySelector('.modal-call__close-btn')

  callButton.addEventListener('click', () => {
    call.classList.add('modal-call--active')
  })

  closeCallButton.addEventListener('click', () => {
    call.classList.remove('modal-call--active')
  })

  call.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal-call')) {
      call.classList.remove('modal-call--active')
    }
  })
}