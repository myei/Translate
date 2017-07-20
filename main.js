/**
 *	Estas Plugin permite el manejo de traducciones de un contexto HTML y JavaScript
 *
 * 	Por parte del HTML, sólo se tiene que agregar a los campos que queremos 
 *	traducidos lo siguiente:
 *
 *		- clase: translate
 *		- data-translate: <keywords a traducir, eg: hello or hello.world>
 *
 *	En JS sólo hay que invocar lo siguiente -> Translate.get(<keyword>)
 *
 *	El contenido de estos keywords deben estar en variables globales en formato
 *	json
 *
 *												git@github.com:m_yei:/translate
 */

var Translate = function () {

	/**
	 *	Idioma por defecto
	 */
	var lang = 'es';

	/**
	 *	Si queremos establecer el idioma del navegador
	 */
	var useBrowserLang = function (useIt) {
		lang = useIt ? (navigator.language || navigator.userLanguage).substr(0,2) : lang;
	};

	/**
	 *	Para establecer un idioma en específico (de los existentes)
	 */
	var setLang = function (_lang) {
		lang = typeof window[_lang] === 'undefined' ? lang : _lang;
	};

	/**
	 *	Getter del idioma en uso
	 */
	var getLang = function () {
		return lang;	
	};

	/**
	 *	Esta función traduce todos los elementos debidamente configurados
	 */
	var translateFields = function () {
		jQuery('.translate').each(function(index, el) {

			if (el.nodeName.toLowerCase() === 'input')
				jQuery(this).prop('placeholder', get(jQuery(this).data('translate')));
			else
				jQuery(this).html(get(jQuery(this).data('translate')));

		}); 
	};

	/**
	 *	Para obtener la traducción de algun keyword en el contexto JavaScript
	 */
	var get = function (argument) {
		return argument.split('.').reduce(function (a, b) { return a[b]; }, window[lang]);
	};

	return {
		setLang,
		getLang,
		useBrowserLang,
		get,
		init: function (argument) {
			translateFields();
		}
	};

}();