function callLimpaForm(){
    event.preventDefault(); // previnir envio do formulario

    var result = confirm("Você realmente deseja apagar todas as informações?");
    
    if(result){
        document.formularioCurriculo.reset();
        return;
    }else{
        return;
    }
}

function callEnviaForm(){
    event.preventDefault(); // previnir envio do formulario

    let r1 = validaNome();
    let r2 = validaEstadoCivil();
    let r3 = validaObjetivo();
    let r4 = validaMetodoContato();
    let r5 = validaNivelLingua();
    let r6 = validaLinguagens();

    if(r1 && r2 && r3 && r4 && r5 && r6){
        document.formularioCurriculo.submit();
    }
}

function validaNome(){
    var nome = document.formularioCurriculo.nome.value;

    if(nome.length <3){
        document.getElementById("retorno-nome").classList = "not-valid-input";
        document.getElementById("retorno-nome").innerHTML = "NOME deve ter 3 ou mais caracteres.";
        document.formularioCurriculo.nome.classList = 'input-style-wrong';
        return false;

    }else{
        document.getElementById("retorno-nome").innerHTML = "";
        document.formularioCurriculo.nome.classList = 'input-style-right';
        return true;
    }

}

function validaEstadoCivil(){
    var estado = document.formularioCurriculo.estadoCivil.value;

    if(estado == -1){
        document.getElementById("retorno-estado-civil").classList = "not-valid-input";
        document.getElementById("retorno-estado-civil").innerHTML = "Selecione um estado civil válido.";
        return false;

    }else{
        document.getElementById("retorno-estado-civil").innerHTML = "";
        return true;
    }

}

function validaObjetivo(){
    var objetivo = document.formularioCurriculo.textareaObjetivo.value;

    if(objetivo.length <= 0){
        document.getElementById("retorno-textarea-objetivo").classList = "not-valid-input";
        document.getElementById("retorno-textarea-objetivo").innerHTML = "Campo de preenchimento obrigatório.";
        return false;
    }else{
        document.getElementById("retorno-estado-civil").innerHTML = "";
        return true;
    }
}

function validaMetodoContato(){
    var tel = document.formularioCurriculo.telefone;
    var email = document.formularioCurriculo.email;

    if(email.value.length == 0 && tel.value.length == 0){
        document.getElementById("retorno-tel").classList = "not-valid-input";
        document.getElementById("retorno-tel").innerHTML = "Email ou telefone devem ser preenchidos.";
        document.getElementById("retorno-email").classList = "not-valid-input";
        document.getElementById("retorno-email").innerHTML = "Email ou telefone devem ser preenchidos.";
        return false;
    }else{
        document.getElementById("retorno-email").innerHTML = "";
        document.getElementById("retorno-tel").innerHTML = "";
        return true;
    }

}
function validaNivelLingua(){
    var ingles = document.formularioCurriculo.inglesNivel.value;
    var espanhol = document.formularioCurriculo.espanholNivel.value;


    if(ingles == -1 || espanhol == -1){
        document.getElementById("retorno-lingua-estrangeira").classList = "not-valid-input";
        document.getElementById("retorno-lingua-estrangeira").innerHTML = "É necessário selecionar um nível para cada lingua.";
        return false;

    }else{
        document.getElementById("retorno-lingua-estrangeira").innerHTML = "";
        return true;
    }

}

function validaLinguagens(){
    //console.log(document.getElementsByClassName('inputCheckBox'));
    var inputs = document.getElementsByClassName('inputCheckBox');
    var ctrl = 0;
    for(let i=0;i<inputs.length;i++){
        if(inputs[i].checked){
            break;
        }else{
            ctrl++;
        }
    }
    if(ctrl == inputs.length){
        var temCtza = confirm("Nenhuma linguagem foi selecionada, tem certeza que deseja continuar?");
        if(temCtza) return true;
        else return false;
    }else{
        return true;
    }
}
function transformaMinusculo(aux){
    return aux.value = aux.value.toLowerCase();
}
function transformaMaiusculo(aux){
    return aux.value = aux.value.toUpperCase();

}