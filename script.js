'user strict';

// Darkmode
// Validation
// autofill


// Add ingredients
const Ingredients = (function Ingredients() {
    function getElemById(id) {
		return document.getElementById(id);
	}
    const _container = getElemById('ingredients-container');
    const _add = getElemById('add');

    const _addDiv = function _addDiv() {
        _add.addEventListener('click', ()=> {
            let div = document.createElement("div");
            div.classList.add('form__section__div', 'margin-bottom-small')
            div.innerHTML = `<input type="text" placeholder="Ingredient 2"> <a href="#" class="remove" id="remove">Remove</a>`
            _container.appendChild(div)
        })
    };

    const _removeDiv = function _removeDiv() {
        function getElemById(id) {
            return document.getElementById(id);
        }

        let _btn = getElemById('remove');


        window.addEventListener('click', (e)=> {
            const target = e.target

            console.log(target.id)

            if( target.id == "remove" ) {
                target.parentElement.remove()

            }
        })
    }
    // <div class="form__section__div margin-bottom-small">
    //     <input type="text" placeholder="Ingredient 2">
    //     <a href="#" class="remove" id="remove">Remove</a>
    // </div>  

    const updateContainer = function updateContainer() {
        _addDiv()
        _removeDiv()
    };



    const init = function init() {
        updateContainer();
    };

    return {
        init: init,
    };

})()


window.addEventListener('load', function() {
    Ingredients.init();
});