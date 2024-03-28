'user strict';

// Darkmode
// Validation
// autofill


// Add ingredients
const Ingredients = (function Ingredients() {
    function getElemById(id) {
        return document.getElementById(id);
    }

    _ingredientNum = 1;
    const _container = getElemById('ingredients-container');
    
    const _addDiv = function _addDiv() {
        const _add = getElemById('add');
        _add.addEventListener('click', ()=> {
            _ingredientNum++;
            let div = document.createElement("div");
            div.classList.add('form__section__div', 'margin-bottom-small')
            div.innerHTML = `<input type="text" placeholder="Ingredient ${_ingredientNum}" required> <a href="#" class="remove" id="remove">Remove</a>`
            _container.appendChild(div)
        })
    };
    const _removeDiv = function _removeDiv() {
        window.addEventListener('click', (e)=> {
            const target = e.target

            if( target.id == "remove" ) {
                _ingredientNum--;
                target.parentElement.remove()
            }
        })
    }  

    const _updateContainer = function updateContainer() {
        _addDiv()
        _removeDiv()
    };

    const init = function init() {
        _updateContainer();
    };

    return {
        init: init,
    };
})()

// validate 
const validateElem = (function validateElem() {
    
    const _updateInput = function updateInput() {

    }
    
    const init = function init() {
        _updateInput();
    };

    return {
        init: init,
    };
})();


window.addEventListener('load', function() {
    Ingredients.init();
});