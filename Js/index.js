let textFieldNotaT1 = document.getElementById("n1");
let textFieldNotaT2 = document.getElementById("n2");
let textFieldNotaT3 = document.getElementById("n3");

textFieldNotaT1.addEventListener("input", OnInput);
textFieldNotaT2.addEventListener("input", OnInput);
textFieldNotaT3.addEventListener("input", OnInput);

function OnInput() {
    var nota1 = textFieldNotaT1.value;
    var nota2 = textFieldNotaT2.value;
    var nota3 = textFieldNotaT3.value;

    if (!StringNull(nota1))
        return LogOutput("Preencha a primeira nota")
    else if (!StringNull(nota2))
        return LogOutput("Preencha a segunda nota")

    if (!ValidInput(nota1) || !ValidInput(nota2) || (StringNull(nota3) && !ValidInput(nota3)))
        return LogOutput("As notas estão inválidas. Verifique se digitou corretamente!")

    var soma = SomaTotalNota(nota1, nota2, nota3);
    var precisa = ((60 - soma) / 4).toFixed(1);
    var media = (soma / 10).toFixed(2);

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
}
