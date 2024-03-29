import Component from '../component'
import { getFocusables } from '../utils/dom'
import dataModal from '../directives/data-modal'
import hotkeys from 'hotkeys-js'

export const DEFAULT_CLASSES = {
  close:  '[data-close]',
  shadow: 'modal_shadow',
  open:   '-open',
  active: '-active'
}

export default class extends Component {

  /**
   * Setup component once
   * @param {Modulus} modulus 
   */
  static onSetup(modulus) {
    modulus.addDirectives({ dataModal }, true)
  }


  /**
   * Initialize component
   */
  onInit(classes) {

    this.isOpen = false
    this.src = null
    this.classes = classes || DEFAULT_CLASSES
    this.els = {
      close: this.el.querySelectorAll(this.classes.close),
      shadow: this.el.querySelector(`.${this.classes.shadow}`)
    }

    // trap focus
    document.addEventListener('focus', this.trapFocus.bind(this), true)

    // close en button click or shadow click
    for (let i = 0; i < this.els.close.length; i++) {
      this.els.close[i].addEventListener('click', e => this.close())
    }
    this.els.shadow.addEventListener('click', e => this.close())

    // close on ESC keydown
    hotkeys('esc', e => this.close())
  }


  /**
   * Clear component
   */
  onDestroy() {
    document.removeEventListener('focus', this.trapFocus.bind(this), true)
  }


  /**
   * Open modal
   * @param {HTMLElement} src
   */
  open(src) {

    // ignore if already open
    if(this.isOpen) return;
    this.isOpen = true
    this.src = src

    // open modal
    this.el.classList.add(this.classes.open)
    setTimeout(() => this.el.classList.add(this.classes.active), 25)

    // spread event
    this.emit('open')
    this.$emit('body.lock', this.el)

    // set focus inside modal
    this.setInnerFocus()
  }


  /**
   * Close modal
   */
  close() {

    // ignore if already close
    if(!this.isOpen) return;
    this.isOpen = false

    // close modal
    this.el.classList.remove(this.classes.active)
    setTimeout(() => {

      this.el.classList.remove(this.classes.open)

      // spread event
      this.emit('close')
      this.$emit('body.unlock')

      if(this.src) {
        this.src.focus()
        this.src = null
      }
    }, 400)
  }


  /**
   * Set focus on the first focusable element
   */
  setInnerFocus() {
    const focusables = getFocusables(this.el)
    if(focusables.length) {
      focusables[0].focus()
    }
  }


  /**
   * Keep focus inside modal while it's open
   */
  trapFocus(e) {
    if(this.isOpen && e.target !== this.el && !this.el.contains(e.target)) {
      e.preventDefault()
      this.setInnerFocus()
      return false
    }
  }

}