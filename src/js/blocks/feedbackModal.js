export function setupFeedbackModal() {
  const feedback = document.querySelector('.modal-feedback')
  const feedbackButton = document.querySelector('.sidebar-menu__chat-button')
  const closeFeedbackButton = document.querySelector('.modal-feedback__close-btn')
  const modalBlock = document.querySelector('.modal__block');


  feedbackButton.addEventListener('click', () => {
    feedback.classList.add('modal-feedback--active')
  })

  closeFeedbackButton.addEventListener('click', () => {
    feedback.classList.remove('modal-feedback--active')
  })

  feedback.addEventListener('click', (event) => {
    if (event.target === modalBlock || modalBlock.contains(event.target)) {
      return;
    }
    feedback.classList.remove('modal-feedback--active');
  });
}