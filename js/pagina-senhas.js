let Button_verificar_senha=document.getElementById('buttom_password');
Button_verificar_senha.addEventListener('click', conferir_senha)
window.addEventListener('beforeunload', function (event)
{
    event.preventDefault();
    event.returnValue='';
})
let underline = '_';
function isNumber(c)
{
    return !isNaN(parseFloat(c))&&isFinite(c);
}

function isSymbol(c) {
    return (/[^\w]/.test(c));
}

function isUpper(c){

    if((c===c.toUpperCase()) && isSymbol(c) === false && isNumber(c) === false && underline != c)
    {
        return true;
    }
}

function isLower(c){
    if((c===c.toLowerCase()) && isSymbol(c) === false && isNumber(c) === false && underline != c)
    {
        return true;
    }
}

function Resposta_case(c){
    return retorno_senha.textContent = `SUA SENHA SERIA DESCOBERTA ${c}`;
}

function conferir_senha()
{

    const resposta = document.querySelector(".resposta");
    resposta.style.display === "none" ? resposta.style.display = "none" : resposta.style.display = "flex";
    let retorno_senha=document.querySelector('.resposta');
    //let verificado_senha =document.querySelector('.testando');
    let senha  = document.getElementById('texto_senha').value;
    let qtde_letras_minusculas = 0;
    let qtde_letras_maiusculas = 0;
    let qtde_numeros = 0;
    let qtde_simbolos = 0;
    for(let i = 0; i < senha.length; i++)
    {
        if(isNumber(senha[i])===true)
        {
            qtde_numeros++;
        }
        else if(isSymbol(senha[i])===true)
        {
            qtde_simbolos++;
        }
        else if(isUpper(senha[i])===true)
        {
            qtde_letras_maiusculas++;
           // alert(senha[i])
        }
        else if(isLower(senha[i])===true)
        {
            qtde_letras_minusculas++;
        }
    }
    
    if (senha.length>18){
        return retorno_senha.textContent = `TEMPO INDETERMINADO`;
    }else{
    switch(senha.length)
    {
        case 4:
            Resposta_case('IMEDIATAMENTE');
        break;

        case 5:
            Resposta_case('IMEDIATAMENTE');
        break;

        case 6:
            Resposta_case('IMEDIATAMENTE');
        break;

        case 7:
            if(qtde_numeros == 7|| qtde_letras_maiusculas == 7 || qtde_letras_minusculas == 7)
            {
                Resposta_case('IMEDIATAMENTE');
            }
            else if((qtde_letras_maiusculas+qtde_letras_minusculas) == 7 & qtde_numeros == 0 && qtde_simbolos == 0)
            {
                Resposta_case('2 SEGUNDOS');
            }
            else if((qtde_numeros+qtde_letras_maiusculas+qtde_letras_minusculas) == 7 && qtde_simbolos == 0)
            {
                Resposta_case('7 SEGUNDOS');
            }
            else if((qtde_numeros+qtde_letras_maiusculas+qtde_letras_minusculas+qtde_simbolos) == 7)
            {
                Resposta_case('31 SEGUNDOS');
            }
        break;

        case 8:
            if(qtde_numeros == 8|| qtde_letras_maiusculas == 8 || qtde_letras_minusculas == 8)
            {
                Resposta_case('IMEDIATAMENTE');
            }
            else if ((qtde_letras_maiusculas+qtde_letras_minusculas) == 8)
            {
                Resposta_case('2 MINUTOS');
            }
            else if((qtde_numeros+qtde_letras_maiusculas+qtde_letras_minusculas) == 8)
            {
                Resposta_case('7 MINUTOS');
            }
            else if((qtde_numeros+qtde_letras_maiusculas+qtde_letras_minusculas+qtde_simbolos) == 8)
            {
                Resposta_case('39 MINUTOS');
            }
        break;

        case 9:
            if(qtde_numeros == 9)
            {
                Resposta_case('IMEDIATAMENTE');
            }
            else if (qtde_letras_maiusculas == 9 || qtde_letras_minusculas == 9)
            {
                Resposta_case('10 SEGUNDOS');
            }
            else if ((qtde_letras_maiusculas+qtde_letras_minusculas) == 9)
            {
                Resposta_case('1 HORA');
            }
            else if((qtde_numeros+letras_maiusculas+qtde_letras_minusculas) == 9)
            {
                Resposta_case('7 HORAS');
            }
            else if((qtde_numeros+qtde_letras_maiusculas+qtde_letras_minusculas+simbolos) == 9)
            {
                Resposta_case('2 DIAS');
            }
        break;

        case 10:
            if(qtde_numeros == 10)
            {
                Resposta_case('IMEDIATAMENTE');
            }
            else if ((qtde_letras_maiusculas == 10 || qtde_letras_minusculas == 10))
            {
                Resposta_case('4 MINUTOS');
            }
            else if ((qtde_letras_maiusculas+qtde_letras_minusculas) == 10)
            {
                Resposta_case('3 DIAS');
            }
            else if((qtde_numeros+qtde_letras_maiusculas+qtde_letras_minusculas) == 10)
            {
                Resposta_case('3 SEMANAS');
            }
            else if((qtde_numeros+qtde_letras_maiusculas+qtde_letras_minusculas+qtde_simbolos) == 10)
            {
                Resposta_case('5 MESES');
            }
        break;

        case 11:
            if(qtde_numeros == 11)
            {
                Resposta_case('IMEDIATAMENTE');
            }
            else if ((qtde_letras_maiusculas == 11 || qtde_letras_minusculas == 11))
            {
                Resposta_case('2 HORAS');
            }
            else if ((qtde_letras_maiusculas+qtde_letras_minusculas) == 11)
            {
                Resposta_case('5 MESES');
            }
            else if((qtde_numeros+qtde_letras_maiusculas+qtde_letras_minusculas) == 11)
            {
                Resposta_case('3 ANOS');
            }
            else if((qtde_numeros+qtde_letras_maiusculas+qtde_letras_minusculas+qtde_simbolos) == 11)
            {
                Resposta_case('34 ANOS');
            }
        break;

        case 12:
            if(qtde_numeros == 12)
            {
                Resposta_case('2 SEGUNDOS');
            }
            else if ((qtde_letras_maiusculas == 12 || qtde_letras_minusculas == 12))
            {
                Resposta_case('2 DIAS');
            }
            else if ((qtde_letras_maiusculas+qtde_letras_minusculas) == 12)
            {
                Resposta_case('24 ANOS');
            }
            else if((qtde_numeros+qtde_letras_maiusculas+qtde_letras_minusculas) == 12)
            {
                Resposta_case('200 ANOS');
            }
            else if((qtde_numeros+qtde_letras_maiusculas+qtde_letras_minusculas+qtde_simbolos) == 12)
            {
                Resposta_case('3 MIL ANOS');
            }
        break;

        case 13:

            if(qtde_numeros == 13)
            {
                Resposta_case('19 SEGUNDOS');
            }
            else if ((qtde_letras_maiusculas == 13 || qtde_letras_minusculas == 13))
            {
                Resposta_case('2 MESES');
            }
            else if ((qtde_letras_maiusculas+qtde_letras_maiusculas) == 13)
            {
                Resposta_case('1 MIL ANOS');
            }
            else if((qtde_umeros+qtde_letras_maiusculas+qtde_letras_minusculas) == 13)
            {
                Resposta_case('12 MIL ANOS');
            }
            else if((qtde_numeros+qtde_letras_maiusculas+qtde_letras_minusculas+qtde_simbolos) == 13)
            {
                Resposta_case('202 MIL ANOS');
            }
        break;

        case 14:
            if(qtde_numeros == 14)
            {
                Resposta_case('3 MINUTOS');
            }
            else if ((qtde_letras_maiusculas == 14 || qtde_letras_minusculas == 14))
            {
                Resposta_case('4 ANOS');
            }
            else if ((qtde_letras_maiusculas+qtde_letras_minusculas) == 14)
            {
                Resposta_case('64 MIL ANOS');
            }
            else if((qtde_numeros+qtde_letras_maiusculas+qtde_letras_minusculas) == 14)
            {
                Resposta_case('750 ANOS');
            }
            else if((qtde_numeros+qtde_letras_maiusculas+qtde_letras_minusculas+qtde_simbolos) == 14)
            {
                Resposta_case('16 MILHOES DE ANOS');
            }
        break;

        case 15:
            if(qtde_numeros == 15)
            {
                Resposta_case('32 MINUTOS');
            }
            else if ((qtde_letras_maiusculas == 15 || qtde_letras_minusculas == 15))
            {
                Resposta_case('100 ANOS');
            }
            else if ((qtde_letras_maiusculas+qtde_letras_minusculas) == 15)
            {
                Resposta_case('3 MILHOES DE ANOS');
            }
            else if((qtde_numeros+qtde_letras_maiusculas+qtde_letras_minusculas) == 15)
            {
                Resposta_case('46 MILHOES DE ANOS');
            }
            else if((qtde_numeros+qtde_letras_maiusculas+qtde_letras_minusculas+qtde_simbolos) == 15)
            {
                Resposta_case('1 BILHAO DE ANOS');
            }
        break;

        case 16:
            if(qtde_numeros == 16)
            {
                Resposta_case('5 HORAS');
            }
            else if ((qtde_letras_maiusculas == 16 || qtde_letras_minusculas == 16))
            {
                Resposta_case('3 MIL ANOS');
            }
            else if ((qtde_letras_maiusculas+qtde_letras_minusculas) == 16)
            {
                Resposta_case('173 MILHOES DE ANOS');
            }
            else if((qtde_numeros+qtde_letras_maiusculas+qtde_letras_minusculas) == 16)
            {
                Resposta_case('3 BILHOES DE ANOS');
            }
            else if((qtde_numeros+qtde_letras_maiusculas+qtde_letras_minusculas+qtde_simbolos) == 16)
            {
                Resposta_case('92 BILHOES DE ANOS');
            }
        break;

        case 17:
            if(qtde_numeros == 17)
            {
                Resposta_case('2 DIAS');
            }
            else if ((qtde_letras_maiusculas == 17 || qtde_letras_minusculas == 17))
            {
                Resposta_case('69 MIL ANOS');
            }
            else if ((qtde_letras_maiusculas+qtde_letras_minusculas) == 17)
            {
                Resposta_case('9 BILHOES DE ANOS');
            }
            else if((qtde_numeros+qtde_letras_maiusculas+qtde_letras_minusculas) == 17)
            {
                Resposta_case('179 BILHOES DE ANOS');
            }
            else if((qtde_numeros+qtde_letras_maiusculas+qtde_letras_minusculas+qtde_simbolos) == 17)
            {
                Resposta_case('7 TRILHOES DE ANOS');
            }
        break;

        case 18:
            if(qtde_numeros == 18)
            {
                Resposta_case('3 SEMANAS');
            }
            else if ((qtde_letras_maiusculas == 18 || qtde_letras_minusculas == 18))
            {
                Resposta_case('2 MILHES DE ANOS');
            }
            else if ((qtde_letras_maiusculas+qtde_letras_minusculas) === 18)
            {
                Resposta_case('467 BILHOES DE ANOS');
            }
            else if((qtde_numeros+qtde_letras_maiusculas+qtde_letras_minusculas) == 18)
            {
                Resposta_case('11 TRILHOES DE ANOS');
            }
            else if((qtde_numeros+qtde_letras_maiusculas+qtde_letras_minusculas+qtde_simbolos) == 18)
            {
                Resposta_case('438 TRILHOES DE ANOS');
            }
        break;
    }
    }
}