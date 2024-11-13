let textFieldNotaT1 = document.getElementById("n1");
let textFieldNotaT2 = document.getElementById("n2");
let textFieldNotaT3 = document.getElementById("n3");

textFieldNotaT1.addEventListener("input", OnInput);
textFieldNotaT2.addEventListener("input", OnInput);
textFieldNotaT3.addEventListener("input", OnInput);

function OnInput(){
    let nota1 = textFieldNotaT1.value * 10;
    let nota2 = textFieldNotaT2.value * 10;
    let nota3 = textFieldNotaT3.value * 10;
    
    if(IncorrectVerifyNota(textFieldNotaT1)){
        return LogOutput("Preencha a primeira nota")
    }
    if(IncorrectVerifyNota(textFieldNotaT2)){
        return LogOutput("Preencha a segunda nota")
    }

    let soma = SomaTotalNota(nota1, nota2, nota3);
    let precisa = ((600 - soma) / 4);
    let media = (soma / 10);
    
    if (precisa.toString() == "NaN")
        return LogOutput("As notas estão inválidas. Verifique se digitou corretamente!")

    let msm;

    let mediaR = (media/10).toFixed(1);
    let precisaR = (precisa/10).toFixed(1);
    let precisava = (((600 - SomaTotalNota(nota1, nota2, 0)) / 4) / 10).toFixed(1);

    if (!(nota3.toString().length > 1)) {
        msm = `Precisa: ${precisaR}\nMedia Atual: ${mediaR}\nStatus: ${precisa > 100 ? "Reprovado nessa diciplina 😢" : `${media >= 60 ? "Aprovado nessa diciplina 😎" : "Aguardando ultima nota"}`}`
    }
    else {
        msm = `Media Final: ${mediaR}\nStatus: ${media < 60 ? `Reprovado nessa diciplina 😭\nPrecisava: ${precisava}` : "Aprovado na diciplina 😎"}`
    }

    return LogOutput(msm);
}

function LogOutput(msg) {
    document.getElementById("message").innerText = msg;
}

function SomaTotalNota(nota1, nota2, nota3) {
    return (nota1 * 3) + (nota2 * 3) + (nota3 * 4);
};

function IncorrectVerifyNota(notaTextField){
    let nota = notaTextField.value * 10;

    if(nota > 100 || notaTextField.value.length > 3 || notaTextField.value.length == 0)
        return true;

    return false;
}


document.querySelector(".info").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "flex";
    document.querySelector(".container").style.display = "none";
});

document.querySelector(".close").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
    document.querySelector(".container").style.display = "flex";
});

/*function OnInput() {
    var nota1 = textFieldNotaT1.value * 100;
    var nota2 = textFieldNotaT2.value * 100;
    var nota3 = textFieldNotaT3.value * 100;

    if (!StringNull(nota1))
        return LogOutput("Preencha a primeira nota")
    else if (!StringNull(nota2))
        return LogOutput("Preencha a segunda nota")

    if (!ValidInput(nota1) || !ValidInput(nota2) || (StringNull(nota3) && !ValidInput(nota3)))
        return LogOutput("As notas estão inválidas. Verifique se digitou corretamente!")

    var soma = SomaTotalNota(nota1, nota2, nota3);
    var precisa = ((60 - soma) / 4).toFixed(1);
    var media = (soma / 10).toFixed(2);

    if (!TestarPrecisa(nota1, nota2, precisa))
        precisa = (parseFloat(precisa) + 0.1).toFixed(1);

    if (precisa == "NaN")
        return LogOutput("As notas estão inválidas. Verifique se digitou corretamente!")

    var msm;

    if (!StringNull(nota3)) {
        msm = `Precisa: ${precisa}\nMedia Atual: ${media}\nStatus: ${precisa > 10 ? "Reprovado nessa diciplina 😢" : `${media >= 6 ? "Aprovado nessa diciplina 😎" : "Aguardando ultima nota"}`}`
    }
    else {
        msm = `Media Final: ${media}\nStatus: ${media < 6 ? `Reprovado nessa diciplina 😭\nPrecisava: ${((60 - SomaTotalNota(nota1, nota2, 0)) / 4).toFixed(1)}` : "Aprovado na diciplina 😎"}`
    }

    return LogOutput(msm);
}

function TestarPrecisa(nota1, nota2, precisa) {
    var soma = SomaTotalNota(nota1, nota2, precisa);
    var media = (soma / 10).toFixed(2);

    return media >= 6;
}

function StringNull(s) {
    return s.length > 0;
}

function LogOutput(msg) {
    document.getElementById("message").innerText = msg;
}

function ValidInput(nota) {
    if (nota === "" || nota.match(/[a-z]/i) != null || nota > 10 || nota.length > 3) {
        return false;
    }

    return true;
}

function SomaTotalNota(nota1, nota2, nota3) {
    return (nota1 * 3) + (nota2 * 3) + (nota3 * 4);
}*/
