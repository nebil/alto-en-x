
# [Alto en X](https://nebil.github.io/alto-en-x)

Un sitio bajo en kilobytes y casi sin dependencias (únicamente _[normalize.css](
https://necolas.github.io/normalize.css)_) que permite crear sellos _ad libitum_.  
La idea es poder generar etiquetados —como los que aparecen en los alimentos—
con el uso de estándares web.

## Requisitos

Para funcionar de forma correcta, este sitio necesita un navegador relativamente moderno.  
Sin embargo, cualquier _web browser_ que entienda [SVG 1.1](http://caniuse.com/#feat=svg)
debería cumplir con esta tarea.  
Por ejemplo, la última versión de Mozilla [Firefox](
https://www.mozilla.org/firefox/new) o Google [Chrome](
https://www.google.com/chrome) será más que suficiente.

[:fox_face:](https://www.mozilla.org/en-US/firefox/products) 
_Mucho gusto. Así es, con un poco de imaginación, los zorros podemos hablar._  
     
_Por supuesto, estás invitado a hacer clic en mi seguro, libre y fantástico pelaje._

## Diseño

### De la geometría

El sello está escrito en [SVG](https://en.wikipedia.org/wiki/Scalable_Vector_Graphics),
con el propósito de representar un octágono[\*](#one) regular de **múltiples** bordes.  
Lamentablemente, **no es posible** definir este tipo de bordes a partir de
la [actual especificación](https://www.w3.org/TR/SVG) de SVG,  
pero es altamente probable que sí estén disponibles
en la [siguiente versión](https://www.w3.org/TR/SVG2/painting.html) :grinning:
—que quizá [nunca veremos](https://css-tricks.com/svg-2-conundrum). :roll_eyes:  
Por lo tanto, el _workaround_ consiste en elaborar cuatro `<polygon>` superpuestos,
con bordes de distinto ancho.

### De la tipografía

El manual elaborado por el Ministerio de Salud establece que

> La familia Arial es la tipografía utilizada en la iconografía,  
> específicamente su presentación _bold_ para la mayor legibilidad de los textos.

Sin embargo, debemos recordar que Arial es una familia
[comercial](https://www.fonts.com/font/monotype/arial). :moneybag:  
Algunos navegadores cuentan con [ella](https://en.wikipedia.org/wiki/Arial),
otros con [Helvetica](https://en.wikipedia.org/wiki/Helvetica),
y las personas [libres](https://www.stallman.org) disfrutan de
[Liberation Sans](https://en.wikipedia.org/wiki/Liberation_fonts).  
Pero, lamentablemente, existen dispositivos que no conocen ninguna de ellas.
¿Qué podemos hacer ante esto?

> _Introducing Arimo: one family to rule them all._

O en otras palabras, [Arimo](https://fonts.google.com/specimen/Arimo)
—que es idéntico a Liberation Sans— es el nuevo _typeface_ estándar,  
con el objetivo de ofrecer un mismo sello, **visualmente consistente**,
en todos los navegadores[\*\*](#two).  
Además, por temas de seguridad,
las imágenes generadas desde SVG no aceptan tipofaces externas.  
Para resolver este problema, Arimo fue transformada a
[base64](https://en.wikipedia.org/wiki/Base64),
para luego ser insertada en el octágono.

## Créditos

Desde acá, aprovecharé de agradecer

- al [Ministerio de Salud](http://www.minsal.cl) por el diseño de los etiquetados
- a Steve Matteson por el refrescante diseño de
[Arimo](https://fonts.google.com/specimen/Arimo)
- a [Google Fonts](https://fonts.google.com) por ofrecer dos elegantes tipofaces
  - [Fira Sans](https://fonts.google.com/specimen/Fira+Sans), obra de Carrois Apostrophe
  - [Roboto](https://fonts.google.com/specimen/Roboto), obra de Christian Robertson
- a [@necolas](https://github.com/necolas) por _normalize.css_
- a [@mrpatiwi](https://github.com/mrpatiwi) por la idea.

## Licencia

El código de este repositorio está bajo el [Mozilla Public License v2.0](
https://www.mozilla.org/MPL/2.0).

---

<a name='one'>\*</a>
también conocido como _octógono_, pero mantendremos las raíces helénicas.  
<a name='two'>\*\*</a>
donde “ todos los navegadores” quiere decir “ojalá, todos los navegadores”.
