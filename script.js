let btn = document.getElementById("btn")
btn.addEventListener("click", () => imc())


let nome = document.getElementById("nome")
nome.addEventListener("focusout", () => corrigirValid())


let altura = document.getElementById("altura")
altura.addEventListener("focusout", () => corrigirValid())
let alturaN = Number(altura.value)


let peso = document.getElementById("peso")
peso.addEventListener("focusout", () => corrigirValid())
let pesoN = Number(peso.value)


let resposta = document.getElementById("resposta")


let div = document.querySelectorAll(".cobertura")
console.log(div)




// Função responsavel por chamar a função validadora de dados e se tudo estiver ok, realizar o calculo do IMC, se não, informar o erro ao usuário.

function imc() { 

     

    if(validador(nome, altura, peso)) {

        let nome = document.getElementById("nome")


        let altura = document.getElementById("altura")
        let alturaN = Number(altura.value)


        let peso = document.getElementById("peso")
        let pesoN = Number(peso.value)

        let imc = pesoN / (alturaN * alturaN)
        let diagnostico = diag(imc)

        resposta.innerText = `Olá, ${nome.value}! Seu IMC é de: ${imc.toFixed(1)}. Resultado: ${diagnostico}`

        console.log(imc)
        console.log(pesoN)
        console.log(alturaN)

    } else {

        alert("[Erro!!] Por favor, preencha todos os campos para continuar.")
    }

   

}

//Função responsavel por avaliar o IMC e gerar um status ou diagnóstico

function diag(x) {

    let a 

    if(x < 18.5) {
        a = "Magreza"

    } else if ( x < 24.9) {
        a = "Saudável"

    } else if ( x < 29.9) {
        a = "Sobrepeso"

    } else if ( x < 34.9) {
        a = "Obsidade Grau I"

    } else if ( x < 39.9) {
        a = "Obsidade Grau II"

    } else  {
        a = "Obsidade Grau III"
    }

    return a
}


// Função que valida se os dados estão preenchidos 
function validador(a, b, c) {

    if(a.value != "" && b.value != "" && c.value != "") {
        return true
    } else {
        return false
    }
}


//Função de corrigi o problema do Valid no CSS
function corrigirValid() {


    if(nome.value == "") {
        div[0].classList.remove("active")

    } else {
        div[0].classList.add("active")
    }


    if(altura.value == "") {
        div[1].classList.remove("active")

    } else {
        div[1].classList.add("active")
    }


    if(peso.value == "") {
        div[2].classList.remove("active")

    } else {
        div[2].classList.add("active")
    }
        
}
