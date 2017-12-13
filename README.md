
# LCD Refactor

Inicio la prueba a las 4:00 pm del 13 de Diciembre, mi fuerte es en nodejs que es javascript,
El archivo original estaba en java. Implementó una solución traducida de Java a  node v7.9.0
Inicialmente considero en el uso de lo práctico no implemento ecmascript, y lo pongo lo mas nativo y compatible posible. Para el lado de las pruebas escribo un módulo de pruebas.  Basado en chai “expect” con mocha.
Para inicializar el ambiente de desarrollo incluyo el package.json

Debes Clonar el repositorio
```
git clone https://github.com/gramirezcarrero/LCDrefactor.git
```

Después en la terminal

```
npm install
```
Para correr los test
```
npm test
```
Para ver una implementación de impresión se define en lcd.js  
2017, 13, 12
```
npm run lcd
```


This is [on GitHub](https://github.com/jbt/markdown-editor) so let me know if I've b0rked it somewhere.


Props to Mr. Doob and his [code editor](http://mrdoob.com/projects/code-editor/), from which
the inspiration to this, and some handy implementation hints, came.

### Implentada con un modulo export de nodejs:
```
var lcdImpresor = require('./lcdImpresor');
var Clase = new lcdImpresor.ClassName()
var size =  1, numeroImp =  2017, espacio = 1;

Clase.procesar(size+","+numeroImp, espacio)
```
