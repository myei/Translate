# TranslateJS

Este plugin esta orientado al manejo de traducciones en el contexto HTML y JavaScript
Para el correcto funcionamiento del mismo es necesario incluir la versión mas reciente de jQuery

# Usabilidad HMTL:

Asigna el contenido HTML del elemento al resultado del keyword:

```
<span class="translate" data-translate="hello"></span>
```

En los campos de tipo *input* establece el placeholder del elemento al resultado del keyword:

```
<input type="text" class="translate" data-translate="greetings.good.morning">
```

# Usabilidad JS:

Define el idioma manualmente de acuerdo a los idiomas definidos:

```
Translate.setLang('lang');
```

Por defecto es false. Utiliza el idioma del navegador (si esta definido):

```
Translate.useBrowserLang(true);
```

Retorna el idioma utilizado:

```
Translate.getLang();
```

Para obtener el valor del keyword en el idioma escogido:

```
Translate.get('key.words');
```

Traduce todos los elementos HTML configurados debidamente:

```
Translate.init();
```