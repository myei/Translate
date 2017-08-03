# TranslateJS

<p>Este plugin está orientado al manejo de traducciones en el contexto HTML y JavaScript.</p>
Para el correcto funcionamiento del mismo es necesario incluir la versión mas reciente de (jQuery)[https://jquery.com/download/].

## Incluyendo recursos

```html
<script src="/path/to/jquery.min.js"></script>
<script src="/path/to/translate.min.js"></script>
```

## Usabilidad HMTL:

Asigna el contenido HTML del elemento al resultado del keyword:

```html
<span class="translate" data-translate="hello"></span>
```

En los campos de tipo **input** establece el placeholder del elemento al resultado del keyword:

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