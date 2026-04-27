'use strict'
async function getDadosCep(cep){

    const url = `http://viacep.com.br/ws/${cep}/json/`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)

    return data
}

async function preencherFormulario(){

    const cep = document.getElementById('cep').value
    const dadosCEP = await getDadosCep(cep)

    document.getElementById('endereco').value = dadosCEP.logradouro
    document.getElementById('numero').value = dadosCEP.numero
    document.getElementById('bairro').value = dadosCEP.bairro
    document.getElementById('localidade').value = dadosCEP.localidade
    document.getElementById('estado').value = dadosCEP.estado

    
}

document.getElementById("cep").addEventListener("focusout",preencherFormulario)