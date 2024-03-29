/**
 * Transform hypen-case to camelCase
 * @param {String} string 
 * @param {Boolean} capitalize first letter 
 */
export function toCamel(string, capitalize = false) {
  let camelized = string.replace(/-([a-z])/g, g => g[1].toUpperCase())
  return (capitalize)
    ? camelized.charAt(0).toUpperCase() + camelized.slice(1)
    : camelized
}


/**
 * Generate a random hash
 * @return {String}
 */
export function randomHash() {
  return Math.random().toString(36).substring(7)
}