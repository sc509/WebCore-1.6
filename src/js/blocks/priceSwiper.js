import Swiper, { Navigation, Pagination } from 'swiper'
Swiper.use([Navigation, Pagination])

export function mobilePriceSlider() {
  const priceSlider = document.querySelector('.price__list')
  let priceSwiper

  if (window.innerWidth < 768 && priceSlider.dataset.mobile == 'false') {
    priceSwiper = new Swiper(priceSlider, {
      slidesPerView: 1,
      spaceBetween: 16,
      pagination: {
        el: '.price__pagination',
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

    priceSlider.dataset.mobile = 'true'
    document.querySelector('.price__pagination').classList.remove('hidden')
  }
}
