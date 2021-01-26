/**
 *	Translate.js
 *
 *	Estas funciones orientadas a clases, permiten el manejo de traducciones de un
 *	sistema que contenga HTML o JavaScript, permitiendo la traducción completa de
 * 	la página con solo agregar a los campos que queremos traducidos lo siguiente:
 *
 *		- clase: translate
 *		- data-translate: <keywords a traducir, eg: hello or hello.world>
 *	
 *	El contenido de estos keywords deben estar en variables globales en formato
 *	json
 *
 *
 *												git@github.com:m_yei:/translate.js
 */

var Translate = function (user_options) {
	
	/**
	 *	Valores por defecto
	 */
	var options = {lang: 'es', prefix: 'lang_', className: 'translate'};

	var _this = this;

	var build = function (user_options) {
		options = Object.assign(options, user_options);
		setLang(options.lang);

		if (isLangDefined())
			translateFields();
		else
			console.error('[translate.js] Objeto de idioma `'+ options.prefix + options.lang + '` no encontrado. Por favor incluya los archivos de idioma.');
	};

	/**
	 *	Si queremos establecer el idioma del navegador
	 */
	var getBrowserLang = function () {
		return (navigator.language || navigator.userLanguage).substr(0,2);
	};

	/**
	 *	Para establecer un idioma en específico (de los existentes)
	 */
	var setLang = function (_lang) {
		console.log(options.prefix + _lang);
		_this.lang = _lang.toLowerCase() === 'browser' ? window[options.prefix + getBrowserLang()] : window[options.prefix + _lang];
	};

	var isLangDefined = function () {
		return !!_this.lang;
	};

	/**
	 *	Getter del idioma en uso
	 */
	var getLang = function () {
		return options.lang;
	};

	/**
	 *	Esta función traduce todos los elementos debidamente configurados
	 */
	var translateFields = function () {
		document.querySelectorAll('.' + options.className).forEach(function(field) {
			field[field.nodeName.toLowerCase() === 'input' ? 'placeholder' : 'innerHTML'] = get(field.dataset.translate);
		}); 
	};

	/**
	 *	Para obtener la traducción de algun keyword en el contexto JavaScript
	 */
	var get = function (argument) {
		return argument.split('.').reduce(function (a, b) { return a[b]; }, _this.lang || []);
	};

	build(user_options);
	

	return {
		getLang: function () {
			return getLang();
		},
		get: function (argument) {
			return get(argument);
		}
	};

};
