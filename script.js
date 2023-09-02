let form = document.getElementById("form");
let linhas = "";

form.addEventListener('submit',function(e){
    e.preventDefault();
    
    adicionaLinha();
    atualizaTabela();
})

function adicionaLinha (){
    const nome = document.getElementById("nome");
    const telefone = document.getElementById("telefone");

    let linha = "<tr>";
    linha += `<td>${nome.value}</td>`;
    linha += `<td>${telefone.value}</td>`;
    linha += `</tr>`;
    linhas += linha;

    nome.value = "";
    telefone.value = "";
}

function atualizaTabela(){
    const bodyTabela = document.querySelector("tbody");
    bodyTabela.innerHTML = linhas;
}

//mascara telefone

const validarTelefone = (event) => {
    let input = event.target
    input.value = phoneMask(input.value)
}

const phoneMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value
  }
