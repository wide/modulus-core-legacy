# Modulus

Le système Modulus permet d'automatiquement lier un élement `HTML` avec une classe `JS`.


## Instance

L'instance principale de Modulus est situé dans le `main.js` et accepte 3 paramètres : `config`, `plugins` et `components`.

```js
import Modulus from 'modulus'

import Router from 'modulus/plugins/router'
import Scroll from 'modulus/plugins/scroll'
import Viewport from 'modulus/plugins/viewport'
import Breakpoint from 'modulus/plugins/breakpoint'

import components from '[ROOT]/build/import-components'

import animations from '~/utils/animations'
import transitions from '~/utils/transitions'
import { BREAKPOINTS } from '~/consts'

export default new Modulus({
  config: {
    debug: !process.env.PRODUCTION
  },
  plugins: {
    router: new Router({ transitions, fallback: 'fade' }),
    scroll: new Scroll(),
    viewport: new Viewport({ animations }),
    breakpoint: new Breakpoint({ sizes: BREAKPOINTS })
  },
  components: {
    ...components
  }
})
```

### modulus.config

```js
config: {
  debug: !process.env.PRODUCTION,
  expose: true
}
```

La `config` permet d'assigner des variables de fonctionnement, elle est accessible depuis un `Plugin` ou `Component` avec `this.$modulus.config`.

| variable        | par défaut | description                                                          |
| ---             | ---        | ---                                                                  |
| `debug`         | `false`    | active ou désactive les logs interne                                 |
| `expose`        | `false`    | attache l'instance à `window.__mod` pour un accès externe            |


### modulus.plugins

```js
plugins: {
  router: new Router({ transitions, fallback: 'fade' }),
  scroll: new Scroll(),
  viewport: new Viewport({ animations }),
  breakpoint: new Breakpoint({ sizes: BREAKPOINTS })
}
```

Les plugins sont des utilitaires traitant d'un sujet particulier et mettant à dispo des `Components` des méthodes et évenements.
Chaque plugin instancié est accessible depuis un `Component` avec `this.$nomDuPlugin`.

Par exemple `Viewport` permet d'observer un élement et de déclencher un callback lorsqu'il apparait à l'écran, utile pour les animations ou le lazy-loading.
Il est accessible avec `this.$viewport` dans un `Component`.

Voir la partie [Plugin](#plugin) pour la liste et l'utilisation des plugins.

!> **Note importante :** il est préférable d'enlever les plugins qui ne vous servent pas pour diminuer le poids des fichiers JS.


### modulus.components

```js
components: {
  ...components
}
```

Les `Components` sont le coeur de Modulus, il s'agit des classes qui seront liées aux élements `HTML` directement à leur création.
 
!> **Note importante** : les lignes `import components from '[ROOT]/build/import-components'` et `...components` injectent directement les composants sans action de votre part, ne les changez surtout pas !

Voir la partie [Component](modulus/component.md) pour leur utilisation.


## Alias d'import

Trois alias sont disponibles pour accéder plus rapidement à des fichiers lors des `import` :
- `[ROOT]` -> `./`
- `~` -> `./src/assets/js/`
- `@` -> `./src/views/components/`

Ex:
```js
import Slider from '~/slider/slider'
import { BREAKPOINTS } from '@/consts'
```


## Cycle de vie

1. `Modulus` est instancié
2. les `Plugins` sont instanciés
3. les élements ayant l'attribut `[data-mod]` sont enregistrés et :
  - le `Component` spécifié dans l'attribute est instancié
  - la méthode `onInit()` est appelée
4. quand un `Component` est supprimé du DOM (changement de page ou action volontaire) :
  - la méthode `onDestroy()` est appelée