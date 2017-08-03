# TranslateJS

<p>Este plugin está orientado al manejo de traducciones en el contexto HTML y JavaScript.</p>

Para el correcto funcionamiento del mismo es necesario incluir la versión mas reciente de [jQuery](https://jquery.com/download/)

## Incluyendo recursos

```html
<script src="/path/to/jquery.min.js"></script>
<script src="/path/to/translate.min.js"></script>
```

## Definición de idiomas

Un punto importante cuando se estan creando los distintos idiomas que majenara nuestro sitio, es que las variables deben ser declaradas de la siguiente forma lang_```name```:

> ```name``` puede ser llamado de la forma en que queramos, ```lang_``` es obligatorio, todo esto en función de evitar conflictos de entornos.

```javascript
var lang_ES = {
	greetings: {
		hello: 'Hola!'
	},

	/**
	 * Más definiciones
	 */
};

var lang_EN = {
	greetings: {
		hello: 'Hello!'
	},

	/**
	 * Más definiciones
	 */
};
```

## Usabilidad HMTL:

Cambia el contenido del elemento con su correspondiente traducción, según lo asignado a través de la directiva ```data-translate```:

```html
<span class="translate" data-translate="hello"></span>
```

En los campos de tipo ```input``` se cambia el ```placeholder```:

```html
<input type="text" class="translate" data-translate="greetings.good.morning">
```

## Usabilidad JS:

Define el idioma manualmente de acuerdo a los idiomas definidos:

```javascript
Translate.setLang('lang');
```

Por defecto es false. Utiliza el idioma del navegador (si está definido):

```javascript
Translate.useBrowserLang(true);
```

Retorna el idioma utilizado:

```javascript
Translate.getLang();
```

Para obtener el valor del keyword en el idioma escogido:

```javascript
Translate.get('key.words');
```

Traduce todos los elementos HTML configurados debidamente:

```javascript
Translate.init();
```