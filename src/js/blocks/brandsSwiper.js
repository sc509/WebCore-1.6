import Swiper, { Navigation, Pagination } from 'swiper'
Swiper.use([Navigation, Pagination])

export function mobileSlider() {
  const slider = document.querySelector('.brands__list')
  let brandSwiper
  if (window.innerWidth < 768 && slider.dataset.mobile == 'false') {
    brandSwiper = new Swiper(slider, {
      slidesPerView: 1,
      spaceBetween: 16,
      pagination: {
        el: '.brands__pagination',
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

    slider.dataset.mobile = 'true'
    document.querySelector('.brands__pagination').classList.remove('hidden')
  }
}

