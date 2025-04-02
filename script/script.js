function Carregar(){
    var tempo = new Date()
    var hora = tempo.getHours()

    if(hora >= 0 && hora <= 5){
        document.body.style.background = 'tan'
    }
    else if(hora < 12){
        document.body.style.background = 'yellow'
    }
    else if(hora < 18){
        document.body.style.background = 'green'
    }
    else{
        document.body.style.background = 'grey'
    }
}
/*
Calculando a Equação do 2º grau
*/
function Calcular(){
    
    //Recebendo todos os id do documento
    var a = window.document.getElementById("valorA")
    var b = window.document.getElementById("valorB")
    var c = window.document.getElementById("valorC")
    var d = window.document.getElementById("delta")
    var X1 = window.document.getElementById('x1')
    var X2 = window.document.getElementById('x2')
    
    //Conversão dos valores recebidos a, b e c
    var A = Number(a.value)
    var B = Number(b.value)
    var C = Number(c.value)

    //Primeira condição! Testando Se o valor de a diferente zero
    if (A != 0){
        
        //Calculos e formulas
        var delta = (B**2) - 4 * A * C
        var raiz = delta **(1/2)
        var r = raiz.toFixed(1)
        var xx1 = (-B + raiz) / (2*A)
        var xx2 = (-B - raiz) / (2*A)
        var ex = - Number(B) + Number(r)
        var ey = - Number(B) - Number(r)

        d.innerHTML += `<p style="font-size: 25px; text-align: center; color: black;">${A}x<sup>2</sup> + ${B}x + ${C} = 0</p>`
        d.innerHTML += `<p style="color: black;"> Calculando o discriminante:</p>`
        d.innerHTML += `<p>∆ = b<sup>2</sup> - 4.a.c </p>`
        d.innerHTML += `<p>∆ = (${B})<sup>2</sup> - 4×${A}×${C} </p>`
        d.innerHTML += `<p>∆ = ${B**2} - ${4*A*C}</p>`
        d.innerHTML += `<p>∆ = ${delta}</p>`
        
        //Condição a!=0 e delta > 0
        if (delta > 0){
            X1.innerHTML += `<p style="color: black;">Determinando o Bhaskara...</p>`
            X1.innerHTML += `<p> X = (- b ± √∆ ) ÷ 2×a</p>`
            X1.innerHTML += `<p> X = [- (${B}) ± √${delta} ] ÷ (2×${A})</p>`
            X1.innerHTML += `<p> X = [(${-1*B}) ± ${raiz.toFixed(1)}] ÷ ${2*A}</p>`
            /*Mostrando a raiz x1*/
            X1.innerHTML += `<p style="color: black;">Determinando a raiz X1</p>`
            X1.innerHTML += `<p> X1 = [(${-1*B}) + ${raiz.toFixed(1)}] ÷ ${2*A}</p>`
            X1.innerHTML += `<p> X1 = ${ex.toFixed(1)} ÷ ${2*A}</p>`
            X1.innerHTML += `X1 = ${xx1.toFixed(2)}` 
            /*Mostrando a raiz x2*/
            X2.innerHTML += `<p style="color: black;">Determinando a raiz X2</p>`
            X2.innerHTML += `<p> X2 = [(${-1*B}) - ${raiz.toFixed(1)}] ÷ ${2*A}</p>`
            X2.innerHTML += `<p> X2 = ${ey.toFixed(1)} ÷ ${2*A}</p>`
            X2.innerHTML += `X2 = ${xx2.toFixed(2)}`
        }

        //Condição a!=0 e delta == 0
        else if(delta == 0){
            X1.innerHTML += `<p style="color: black;">Determinando o Bhaskara...</p>`
            X1.innerHTML += `<p> X = (- b ± √∆ ) ÷ 2×a</p>`
            X1.innerHTML += `<p> X = [- (${B}) ± √${delta} ] ÷ (2×${A})</p>`
            X1.innerHTML += `<p> X = [(${-1*B}) ± ${raiz.toFixed(1)}] ÷ ${2*A}</p>`
            X1.innerHTML += `<p>X1,2 = ${xx1.toFixed(2)}</p>`
        }

    //Condição a!=0 e delta < 0
        else if (delta < 0){
            d.innerHTML += `<p style="text-align: center; color: red; margin: 10px;">O discriminante (Δ) não Pode ser Menor que zero (0)!<br>não há x1 e x2<br>Atualize e tente novamente!</p>`
        }
    } 
    
    //Senao é diferente! Ou, se é igual a zero!!
    else{
        d.innerHTML += `<p style="text-align: center; color: red; margin: 10px;">É impossível resolver!!<br>O valor de "a" tem de ser diferente de Zero!</p>`
    }
}

//Funcao Limpar tela
function limpar(){
    window.alert('Campos Limpados!...')
}