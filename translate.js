/**
 *	Translate.js
 *
 *												https://github.com/myei/translate.js
 */

var Translate = function (user_options) {

	var options = {lang: 'es', prefix: 'lang_', className: 'translate'}, _this = this;

	var build = function (user_options) {
		options = Object.assign(options, user_options);
		setLang(options.lang);

		if (isLangDefined())
			translateFields();
		else
			console.error('[translate.js] Objeto de idioma `'+ options.prefix + options.lang + '` no encontrado. Por favor incluya los archivos de idioma.');
	};

	var getBrowserLang = function () {
		return (navigator.language || navigator.userLanguage).substr(0,2);
	};

	var setLang = function (_lang) {
		_this.lang = _lang.toLowerCase() === 'browser' ? window[options.prefix + getBrowserLang()] : window[options.prefix + _lang];
	};

	var isLangDefined = function () {
		return !!_this.lang;
	};

	var getLang = function () {
		return options.lang;
	};

	var translateFields = function () {
		document.querySelectorAll('.' + options.className).forEach(function(field) {
			if (field.dataset.translate)
				field[field.nodeName.toLowerCase() === 'input' ? 'placeholder' : 'innerHTML'] = get(field.dataset.translate);
			else
				console.warn('[translate.js] No se encontró el atributo `data-translate` en el campo:', field);
		}); 
	};

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
