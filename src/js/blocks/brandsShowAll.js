import { setListener } from "./setListener";


export function setupBrandsShowAll() {
  const showAllButton = document.querySelector('.brands__show-all')
  const brandsList = document.querySelector('.brands__list-wrapper')
  const showAllText = showAllButton.textContent

  showAllButton.addEventListener('click', () => {
    if (showAllButton.classList.contains('show-all--hide')) {
      brandsList.classList.remove('brands__list-wrapper--ohs')

      showAllButton.textContent = showAllText
      showAllButton.classList.remove('show-all--hide')
      showAllButton.classList.remove('brands__show-all--rotate')
    } else {
      brandsList.classList.add('brands__list-wrapper--ohs')

      showAllButton.textContent = 'Скрыть'
      showAllButton.classList.add('show-all--hide')
      showAllButton.classList.add('brands__show-all--rotate')
    }
  })

  const hideButton = document.querySelector('.show-all--hide')
  setListener(hideButton, 'click', () => {
    brandsList.classList.remove('brands__list-wrapper--ohs')

    showAllButton.textContent = showAllText
    showAllButton.classList.remove('show-all--hide')
    showAllButton.classList.remove('brands__show-all--rotate')
  })
}