export default {

  /**
   * Selector
   */
  seek: '[data-scroll-to]',


  /**
   * Bind directive to element
   * @param {Modulus} modulus 
   * @param {HTMLElement} el 
   */
  bind(modulus, el) {
    el.addEventListener('click', e => {
      e.stopPropagation()
      modulus.plugins.scroll.to(e.target.dataset.scrollTo || e.target.href)
      return false
    })
  }

}