# Breakpoint Plugin

Ce plugin permet de déclencher des events lors du changement de breakpoint et d'offrir des méthodes de calcul.

## Installation

Pour activer le plugin, l'instancier dans le `main.js`:

```js
import Modulus from 'modulus'

import Breakpoint from 'modulus/plugins/breakpoint'
import { BREAKPOINTS } from '~/consts'

export default new Modulus({
  plugins: {
    breakpoint: new Breakpoint({ sizes: BREAKPOINTS })
  }
})
```

### breakpoint.sizes

La liste des tailles d'écran à observer, basé sur le modèle suivant:

```js
{
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
}
```


## Fonctionnement actif

### $breakpoint.current

Permet de connaitre le breakpoint actuel sous la forme `{ name, min, max, value }` où la valeur est la largeur de l'écran:

```js
import Component from 'modulus/component'

export default class extends Component {
  
  onInit() {
    console.log(this.$breakpoint.current)
  }

}
```

### $breakpoint.up()

Permet de vérifier si la taille actuelle est dans et au dessus d'un breakpoint :

```js
import Component from 'modulus/component'

export default class extends Component {
  
  onInit() {
    if(this.$breakpoint.up('lg')) {
      // for lg and up
    }
  }

}
```

### $breakpoint.down()

Permet de vérifier si la taille actuelle est dans et au dessous d'un breakpoint :

```js
import Component from 'modulus/component'

export default class extends Component {
  
  onInit() {
    if(this.$breakpoint.down('lg')) {
      // for lg and down
    }
  }

}
```

### $breakpoint.only()

Permet de vérifier si la taille actuelle est strictement dans un breakpoint :

```js
import Component from 'modulus/component'

export default class extends Component {
  
  onInit() {
    if(this.$breakpoint.only('lg')) {
      // for lg only
    }
  }

}
```

### $breakpoint.range()

Permet de vérifier si la taille actuelle est strictement entre deux breakpoints inclus :

```js
import Component from 'modulus/component'

export default class extends Component {
  
  onInit() {
    if(this.$breakpoint.range('sm', 'lg')) {
      // for sm, md and lg
    }
  }

}
```


## Evenements

Lors d'un changement de taille du viewport, si un breakpoint est franchi, un évenement `breakpoint` est émit à destination des composants:

```js
import Component from 'modulus/component'

export default class extends Component {
  
  onInit() {

    this.$on('breakpoint', bp => {
      // do something here
    })

  }

}
```