function Numero(valor){
    
    this.valor= valor,
    this.valor_b64= btoa(valor)
}

cantidad = prompt('Ingrese cantidad de numeros')

var numeros = []
for(i=0;i<=cantidad-1 ;i++){
    numeros.push(
        new Numero (Math.ceil(Math.random()*1000),this.valor_b64)
    )
}
console.log(numeros)
var body = document.body
var tabla = document.createElement('table')
var tr = document.createElement('tr')
var td = document.createElement('td')
td.innerHTML = 'ID'
td.style.border = '1px solid'
tr.appendChild(td)
td = document.createElement('td')
td.innerHTML = 'Numero'
td.style.border = '1px solid'
tr.appendChild(td)
td = document.createElement('td')
td.innerHTML = 'Base64'
td.style.border = '1px solid'
tr.appendChild(td)
tabla.appendChild(tr)
tabla.style.border = '1px solid'
i =1
numeros.forEach(numero =>{
    var tr = document.createElement('tr')
    var td = document.createElement('td')
    td.innerHTML = i
    tr.appendChild(td)
    td.style.border = '1px solid blue'
    td = document.createElement('td')
    td.innerHTML = numero.valor
    tr.appendChild(td)
    td.style.border = '1px solid blue'
    td = document.createElement('td')
    td.innerHTML = numero.valor_b64
    tr.appendChild(td)
    td.style.border = '1px solid blue'
    tabla.appendChild(tr)
        i++
})
body.appendChild(tabla)