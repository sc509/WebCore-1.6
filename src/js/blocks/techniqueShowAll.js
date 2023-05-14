import { setListener } from "./setListener";


export function setupTechniqueShowAll() {
  const techniqueShowAllButton = document.querySelector('.technique__show-all')
  const techniqueList = document.querySelector('.technique__list-wrapper')
  const techniqueShowAllText = techniqueShowAllButton.textContent

  techniqueShowAllButton.addEventListener('click', () => {
    if (techniqueShowAllButton.classList.contains('technique__show-all--hide')) {
      techniqueList.classList.remove('technique__list-wrapper--ohs')

      techniqueShowAllButton.textContent = techniqueShowAllText
      techniqueShowAllButton.classList.remove('technique__show-all--hide')
      techniqueShowAllButton.classList.remove('technique__show-all--rotate')
    } else {
      techniqueList.classList.add('technique__list-wrapper--ohs')

      techniqueShowAllButton.textContent = 'Скрыть'
      techniqueShowAllButton.classList.add('technique__show-all--hide')
      techniqueShowAllButton.classList.add('technique__show-all--rotate')
    }
  })

  const techniqueHideButton = document.querySelector('.technique__show-all--hide')
  setListener(techniqueHideButton, 'click', () => {
    techniqueList.classList.remove('technique__list-wrapper--ohs')

    techniqueShowAllButton.textContent = techniqueShowAllText
    techniqueShowAllButton.classList.remove('technique__show-all--hide')
    techniqueShowAllButton.classList.remove('technique__show-all--rotate')
  })
}
