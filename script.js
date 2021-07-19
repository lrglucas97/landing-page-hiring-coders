const form = document.getElementById('conteudoform')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('telefone').value;
    let dados = {
        nome,
        email,
        telefone,
    }
    let converterDados = JSON.stringify(dados);
    localStorage.setItem('lead', converterDados);

    let conteudoform = document.getElementById('conteudoform');

    let loading = `<p><img src="assets/loader.gif" alt="Carregando..." align="middle"></p>`

    let loaded = `<p>Dados enviados!</p>`

    conteudoform.innerHTML = loading


    setTimeout(() => {
        conteudoform.innerHTML = loaded
    }, 3000)

})