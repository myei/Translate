document.querySelectorAll('.change-language').forEach(function (field) {

    field.addEventListener('click', function () {
        document.querySelectorAll('.change-language').forEach(function (field) { field.children[0].classList.remove('active'); });
        document.querySelectorAll('.load').forEach(function (field) { field.style.display = 'none'; });
        document.querySelector('.' + field.dataset.action).style.display = 'block';
        field.children[0].classList.add('active');
        
        if (!!field.dataset.switch) buildInstance(field.dataset.action.substr(5));
    });

});

var buildInstance = function (lang) {
    var t = Translate({lang: lang, className: 'translate'});

    console.log(t.getLang());
    console.log(t.get('greetings.good.morning'));
};

buildInstance('es');