# Selector

Custom select accessible AA, remplace `Dropdown`.

## Installation

Dans le fichier `main.js`, importer `modulus/components/selector` :
```js
import Modulus    from 'modulus'
import selector   from 'modulus/components/selector'
import components from '[ROOT]/build/import-components'

export default new Modulus({
  components: {
    selector,
    ...components
  }
})
```

## Usage

Sur un `<select>` ajouter l'attribut `data-mod="selector"` pour activer la surcouche :

Votre composant doit hériter la class `Dropdown` pour activer les fonctionnalités sur votre élément :

```html
<select data-mod="selector">
  <option>Choose an option</option>
  <option value="1" class="my-option">Tyrannosaurus</option>
  <option value="2">Velociraptor</option>
  <option value="3">Deinonychus</option>
</select>
```

Sera transformé en :
```html
<div class="selector">
  <button class="selector_current" data-index="0">Choose an option</button>
  <span class="selector_caret"></span>
  <ul class="selector_list">
    <li>
      <button class="selector_item">Choose an option</button>
    </li>
    <li>
      <button class="selector_item my-option" value="1">Tyrannosaurus</button>
    </li>
    <li>
      <button class="selector_item" value="2">Velociraptor</button>
    </li>
    <li>
      <button class="selector_item" value="3">Deinonychus</button>
    </li>
  </ul>
  <select>...</select>
</div>
```

## HTML dans l'option

Pour changer le contenu d'un option autre que son texte d'origine, ajouter l'attribut `data-content` dans l'`<option>` :
```html
<option data-content="Bar">Foo</option>
```

sera transformé en :
```html
<li>
  <button class="selector_item">Bar</button>
</li>
```

## Options de groupe

La balise `<optgroup>` est prise en compte :
```html
<optgroup label="Theropods" class="my-group">
  <option class="my-option">Tyrannosaurus</option>
  <option>Velociraptor</option>
  <option>Deinonychus</option>
</optgroup>
```

sera transformée en :
```html
<li>
  <ul class="selector_group my-group">
    <li class="selector_label">Theropods</li>
    <li>
      <button class="selector_item my-option" value="Tyrannosaurus">Tyrannosaurus</button>
    </li>
    <li>
      <button class="selector_item" value="Velociraptor">Velociraptor</button>
    </li>
    <li>
      <button class="selector_item" value="Deinonychus">Deinonychus</button>
    </li>
  </ul>
</li>
```

## Ouverture vers le haut

La position du selector est calculée à l'ouverture et la class `-top` est ajouté si le selector est dans le tier bas du viewport.