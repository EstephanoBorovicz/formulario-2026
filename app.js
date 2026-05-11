'use strict'
async function getDadosCep(cep){

    const url = `https://cep.awesomeapi.com.br/json/${cep}`
    const response = await fetch(url)
    const data = await response.json()

    return data
}

async function preencherFormulario(){

    const cep = document.getElementById('cep').value
    const dadosCEP = await getDadosCep(cep)

    document.getElementById('endereco').value = dadosCEP.address
    document.getElementById('bairro').value = dadosCEP.district
    document.getElementById('cidade').value = dadosCEP.city
    document.getElementById('estado').value = dadosCEP.state

    
}

document.getElementById("cep").addEventListener("focusout",preencherFormulario)