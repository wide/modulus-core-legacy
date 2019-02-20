/**
 * Default slide transition duration
 */
export const SLIDE_DURATION = 400


/**
 * Hide element with slide effect bottom to top
 * @param {HTMLElement} el
 * @param {Number} duration ms
 * @return {Promise}
 */
export function slideUp(el, duration = SLIDE_DURATION) {
  return new Promise(resolve => {
    el.style.height = el.offsetHeight + 'px'
    el.style.transitionProperty = `height, margin, padding`
    el.style.transitionDuration = duration + 'ms'
    el.offsetHeight // eslint-disable-line no-unused-expressions
    el.style.overflow = 'hidden'
    el.style.height = 0
    el.style.paddingTop = 0
    el.style.paddingBottom = 0
    el.style.marginTop = 0
    el.style.marginBottom = 0
    setTimeout(() => {
      el.style.display = 'none'
      el.style.removeProperty('height')
      el.style.removeProperty('padding-top')
      el.style.removeProperty('padding-bottom')
      el.style.removeProperty('margin-top')
      el.style.removeProperty('margin-bottom')
      el.style.removeProperty('overflow')
      el.style.removeProperty('transition-duration')
      el.style.removeProperty('transition-property')
      resolve(false)
    }, duration)
  })
}


/**
 * Show element with slide effect top to bottom
 * @param {HTMLElement} el
 * @param {Number} duration ms
 * @return {Promise}
 */
export function slideDown(el, duration = SLIDE_DURATION) {
  return new Promise(resolve => {
    el.style.removeProperty('display')
    let display = window.getComputedStyle(el).display
    if(display === 'none') display = 'block'
    el.style.display = display
    const height = el.offsetHeight
    el.style.overflow = 'hidden'
    el.style.height = 0
    el.style.paddingTop = 0
    el.style.paddingBottom = 0
    el.style.marginTop = 0
    el.style.marginBottom = 0
    el.offsetHeight // eslint-disable-line no-unused-expressions
    el.style.transitionProperty = `height, margin, padding`
    el.style.transitionDuration = duration + 'ms'
    el.style.height = height + 'px'
    el.style.removeProperty('padding-top')
    el.style.removeProperty('padding-bottom')
    el.style.removeProperty('margin-top')
    el.style.removeProperty('margin-bottom')
    window.setTimeout(() => {
      el.style.removeProperty('height')
      el.style.removeProperty('overflow')
      el.style.removeProperty('transition-duration')
      el.style.removeProperty('transition-property')
      resolve(false)
    }, duration)
  })
}


/**
 * Hide or shor element with slide effect
 * @param {HTMLElement} el
 * @param {Number} duration ms
 * @returns {Promise}
 */
export function slideToggle(el, duration = SLIDE_DURATION) {
  return (window.getComputedStyle(el).display === 'none')
    ? slideDown(el, duration)
    : slideUp(el, duration)
}