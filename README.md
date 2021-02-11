# TranslateJS

<p>Este plugin está orientado al manejo de varios idiomas en el contexto HTML y JavaScript.</p>

> No necesita jQuery.
## Ejemplos de uso:

Puedes probar el demo [aqui](https://myei.github.io/translate.js/).

## Incluyendo recursos

```html
<!-- Incluir los idiomas que utilizaremos -->
<script src="/path/to/lang_es.min.js"></script>

<script src="/path/to/translate.min.js"></script>
```

## Definición de opciones:

Los siguientes son los valores por defecto, se pueden especificar sólo los valores que deseemos cambiar

```javascript
var options = {
	lang: 		'es',		// Valores: 'browser', 'nombre_idioma', Objeto JSON
	prefix: 	'lang_',	// Prefijo de los objetos
	className: 	'translate'	// Clase de los campos a traducir
};
```

## Definición de idiomas

Un punto importante cuando se estan creando los distintos idiomas que majenara nuestro sitio, es que las variables deben ser declaradas respetando la siguiente estructura:  `options.prefix` `options.lang`:

```javascript
/* 
 * lang_: corresponde a options.prefix
 * es: corresponde a options.lang
 */

var lang_es = {
	greetings: {
		hello: 'Hola!'
	},

	/**
	 * Más definiciones
	 */
};

var lang_en = {
	greetings: {
		hello: 'Hello!'
	},

	/**
	 * Más definiciones
	 */
};
```

## Usabilidad JS e inicialización:

```javascript
var t = Translate(options); // Inicialización
```

Para verificar el idioma utilizado:

```javascript
t.getLang();
```

Para obtener el valor del keyword en el idioma escogido:

```javascript
t.get('key.words');
```

## Configuración HMTL:

Cambia el contenido de los elementos con su correspondiente traducción, según lo asignado a través de la directiva ```data-translate```  ó  ```data-translate-prop```:

> Deben tener la clase definida en `options.className` (por defecto: 'translate')

> La traducción por defecto se asignará a `innerHTML` en todos los campos y `placeholder` para los input, si quieremos mostrar la traducción en otra propiedad del campo podemos usar `translate-prop` donde `prop` debe ser alguna propiedad html, (ej: `title`, `value`)

```html
<span class="translate" data-translate="hello"></span>

<select>
	<option class="translate" data-translate="greetings.hey" data-translate-value="greetings.hey"></option> <!-- Esto imprimirá el valor tanto en `innerHTML` como en el `value` del select-->
</select>
```

En los campos de tipo ```input``` se cambia el ```placeholder```:

```html
<input type="text" class="translate" data-translate="greetings.good.morning">
```