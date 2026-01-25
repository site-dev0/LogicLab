function gerar_certificado(){
    let hoje = new Date();

    let dia = hoje.getDate();
    let mes = hoje.getMonth() + 1; // Janeiro é 0!
    let ano = hoje.getFullYear();

    let dataFormatada = "Data de emissão: " + (dia < 10 ? "0" + dia : dia) + "/" + (mes < 10 ? "0" + mes : mes) + "/" + ano;


    let data_text = window.document.getElementById("data")
    let nome = window.document.getElementById("nome")
    let projeto_github = window.document.getElementById("project")
    let nome_input = window.document.getElementById("nome-input").value
    let projeto_github_input = window.document.getElementById("projeto-github-input").value

    if( nome_input === "" || projeto_github === "") {
        window.alert("[AVISO] Preencha os campos!")
        return
    }

    nome.innerText = nome_input
    projeto_github.innerText = `Projeto Final: ${projeto_github_input}`
    data_text.innerText = dataFormatada

    window.print()
}