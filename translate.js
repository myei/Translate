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
		var criteria, target;
		document.querySelectorAll('.' + options.className).forEach(function(field) {
			var field_criteria = Object.keys(field.dataset).filter(function(data) { 
				if (!data.indexOf('translate')) {
					criteria = data.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase().split('-');
					target = criteria.length > 1 ? criteria[1] : field.nodeName.toLowerCase() === 'input' ? 'placeholder' : 'innerHTML';

					field[target] = get(field.dataset[!!criteria.length ? data : 'translate']);
					
					return data;
				}
			});
			
			if (field_criteria.length === 0) 
				console.warn('[translate.js] No se encontró atributo `data-translate*` en el campo:', field);
		}); 
	};

	var get = function (argument) {
		var translated = argument.split('.').reduce(function (a, b) { return a[b] || ''; }, _this.lang || []);
		
		if (translated.length === 0) 
			console.error('[translate.js] No se encontró el keyword:', argument);
		
		return translated;
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
