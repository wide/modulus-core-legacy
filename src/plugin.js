export default class Plugin {

  constructor() {
    this.attributes = {}
  }

  
  /**
   * Initialize component 
   */
  onInit() {}


  /**
   * Listen to global event bus
   * @param {String} event 
   * @param {Function} callback 
   */
  $on(event, callback) {
    this.$modulus.on(event, (...args) => callback(...args))
  }


  /**
   * Emit to both global and local event bus
   * @param {String} event 
   * @param  {...any} args 
   */
  $emit(event, ...args) {
    this.$modulus.emit(event, ...args)
  }

}