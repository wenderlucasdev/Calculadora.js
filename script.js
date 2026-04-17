//Seleciona elemento do visor pelo ID
const display = document.getElementById('display');

//Adiciona numeros e operadores
function appendToDisplay(input){
    display.value += input;
}

//Limpa tudo (botao C)
function clearDisplay(){
    display.value = "";
}

//Apaga apenas o ultimo dado inserido (DEL)
function deleteLast(){
    display.value = display.value.slice(0, -1);
}

//Botao de resultado
function calculate(){
    try {
        display.value = eval(display.value);
    } catch (error){
        display.value = "Erro";
    }
}

/*Botao troca de tema */
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;
const themeIcon = document.getElementById('theme-icon');

themeToggle.addEventListener('click', () => {
    if(html.getAttribute('data-theme') === 'light'){
        html.setAttribute('data-theme', 'dark');
        themeIcon.innerText = 'light_mode'
    }else{
        html.setAttribute('data-theme', 'light');
        themeIcon.innerText = 'dark_mode';
    }
})