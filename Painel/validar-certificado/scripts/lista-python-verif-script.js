function verificar_respostas(){
    let acertos = 0

    let q1 = document.getElementsByName("q1")
    let q2 = document.getElementsByName("q2")
    let q3 = document.getElementsByName("q3")
    let q4 = document.getElementsByName("q4")
    let q5 = document.getElementsByName("q5")
    let q6 = document.getElementsByName("q6")

    let main = document.getElementById("main")

    let resp1, resp2, resp3, resp4, resp5, resp6

    for (let i = 0; i < q1.length; i++){
        if(q1[i].checked) {
            resp1 = q1[i].value
        }
    }

    for (let i = 0; i < q2.length; i++){
        if(q2[i].checked) {
            resp2 = q2[i].value
        }
    }

    for (let i = 0; i < q3.length; i++){
        if(q3[i].checked) {
            resp3 = q3[i].value
        }
    }

    for (let i = 0; i < q4.length; i++){
        if(q4[i].checked) {
            resp4 = q4[i].value
        }
    }

    for (let i = 0; i < q5.length; i++){
        if(q5[i].checked) {
            resp5 = q5[i].value
        }
    }

    for (let i = 0; i < q6.length; i++){
        if(q6[i].checked) {
            resp6 = q6[i].value
        }
    }

    if (resp1 === "A") {
        acertos++
    }

    if (resp2 === "A") {
        acertos++
    }

    if (resp3 === "A") {
        acertos++
    }

    if (resp4 === "A") {
        acertos++
    }

    if (resp5 === "C") {
        acertos++
    }

    if (resp6 === "B") {
        acertos++
    }

    if(acertos >= 4) {
        main.innerHTML = `
        <h2>&#127942; 
        Resultado: ${acertos} de acertos </h2>
        <p>Parabéns você passou e pode emitir seu certificado!</p>
        <p><a href="../emitir-certificados/pag-certificado-python.html">&#127891;  Emitir certificado</a></p>
        `
    } else {
        main.innerHTML = `
        <h2>&#128170; 
        Resultado: ${acertos} de acertos </h2>
        <p>A média é 4, infelizmente você não passou. Lembre-se: a persistência leva ao sucesso.</p>
        <p><a href="lista-python-verif.html">&#128257; Tentar novamente</a></p>
        `
    }
}