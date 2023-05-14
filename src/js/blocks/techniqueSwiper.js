import Swiper, { Navigation, Pagination } from 'swiper'
Swiper.use([Navigation, Pagination])

export function mobileTechniqueSlider() {
  const techniqueSlider = document.querySelector('.technique__list')
  let techniqueSwiper
  if (window.innerWidth < 768 && techniqueSlider.dataset.mobile == 'false') {
    techniqueSwiper = new Swiper(techniqueSlider, {
      slidesPerView: 1,
      spaceBetween: 16,
      pagination: {
        el: '.technique__pagination',
        type: 'bullets'
      },
      breakpoints: {
        320: {
          slidesPerView: 1.25
        },
        768: {
          enabled: false,
          width: 224,
          spaceBetween: 24
        }
      }
    })

    techniqueSlider.dataset.mobile = 'true'
    document.querySelector('.technique__pagination').classList.remove('hidden')
  }
}
