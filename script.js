'user strict';
// Darkmode
// Validation
// autofill
function getElemById(id) {
    return document.getElementById(id);
}

// Add ingredients
const Ingredients = (function Ingredients() {
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

// validate input values
const ValidateElem = (function ValidateElem() {
    _inputCookingTime = getElemById("cooking-time") 

    const _checkValidity = function _checkValidity(input, regex) {
        input.addEventListener("input", ()=> {
            input.value = input.value.replace(regex, "")
        })
    } 
    
    const _updateInput = function updateInput() {
        _checkValidity(_inputCookingTime, /\D/g)
        // many more input can be validated if needed by using _checkValidity function
    }
    
    const init = function init() {
        _updateInput();
    };

    return {
        init: init,
    };
})();


const DropImg = (function DropImg() {
    const _dropArea = getElemById("drop-area");
    const _inputImg = getElemById("input-img");
    const _imgView = getElemById("img-view");
    
    const _updateImg = function updateImg() {
        _inputImg.addEventListener("change", ()=> {
            let imgLink = URL.createObjectURL(_inputImg.files[0]);
            _imgView.style.backgroundImage = `url(${imgLink})`;
            _imgView.textContent = "";
            _imgView.style.border = "none"
        })

        _dropArea.addEventListener("dragover", (event)=> {
            event.preventDefault();
        })

        _dropArea.addEventListener("drop", (event)=> {
            event.preventDefault();
            _inputImg.files = event.dataTransfer.files;
            let imgLink = URL.createObjectURL(_inputImg.files[0]);
            _imgView.style.backgroundImage = `url(${imgLink})`;
            _imgView.textContent = "";
            _imgView.style.border = "none"
        })
    }

    const init = function init() {
       _updateImg();
    };

    return {
        init: init,
    };
})();


window.addEventListener('load', function() {
    Ingredients.init();
    ValidateElem.init();
    DropImg.init();
});