const $result = document.querySelector('.result');
const $changeTheme = document.querySelectorAll('input[name="theme"]');
const $links = document.querySelectorAll('link[rel="stylesheet"]');


$changeTheme.forEach(selector => {
    selector.addEventListener("click", () =>{
        if(selector.classList.contains('one')){
            $links[1].setAttribute('href','assets/css/style-theme-one.css');
        }
        if(selector.classList.contains('two')){
            $links[1].setAttribute('href','assets/css/style-theme-two.css');
        }
        if(selector.classList.contains('three')){
            $links[1].setAttribute('href','assets/css/style-theme-three.css');
        }
    });
});


function doCalc(e){
    try {
        $result.textContent = eval(e);
        
    } catch (error) {
        error = 'Operação Inválida';
        $result.textContent = error;
        setTimeout(function(){
            displayReset();
        },1000 * 2);
    }
}

function removeItemDisplay(){
    $result.textContent = $result.textContent.slice(0,-1);    
}

function displayReset(){
    $result.textContent = "";
}

function displayResult(e){
    $result.textContent += e;
}


document.addEventListener("click", (e) => {
    const el = e.target;
    const elClassList = el.classList;
    if(elClassList.contains("item")){
        displayResult(el.value);
    } 
    if(elClassList.contains("control-delete")){
        removeItemDisplay();
    }
    if(elClassList.contains("control-reset")){
        displayReset();
    }
    if(elClassList.contains("control-submit")){
        doCalc($result.textContent);
    }
});