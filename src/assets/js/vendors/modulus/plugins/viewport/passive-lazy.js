export default {

  /**
   * Lazy load img with `data-src` attribute when entering the viewport
   */
  apply(viewport, root = document.body) {
    viewport.observe({
      target: root.querySelectorAll(`img[${viewport.config.srcAttribute}]`),
      once: true, // destroy observer after callback
      offset: '200px', // trigger 200px before entering viewport
      callback: el => el.src = el.getAttribute(viewport.config.srcAttribute)
    })
  },

  clear() {}

}