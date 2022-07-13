alert("Bienvenido al parque de diversiones. El precio de entrada es de $5, si entran 6 personas o más, se realiza un descuento de $3. El número máximo de personas por grupo que puede ingresar es de 10")

let precio = 5
let numeroDePersonas = " "

for(let i=0; i<15; i++){
  
  numeroDePersonas = prompt("¿Cuántas personas son?")
  
  if(numeroDePersonas == 0){
    alert("No debes pagar nada, vuelve pronto")
  }else if(numeroDePersonas == 1){
    alert(`Su total a pagar es de $${precio * numeroDePersonas}`)  
  }else if(numeroDePersonas == 2){
    alert(`Su total a pagar es de $${precio * numeroDePersonas}`)
  }else if(numeroDePersonas == 3){
    alert(`Su total a pagar es de $${precio * numeroDePersonas}`)
  }else if(numeroDePersonas == 4){
    alert(`Su total a pagar es de $${precio * numeroDePersonas}`)
  }else if(numeroDePersonas == 5){
    alert(`Su total a pagar es de $${precio * numeroDePersonas}`)
  }else if(numeroDePersonas >=6 && numeroDePersonas <=10){
    alert(`Su total a pagar es de $${precio * numeroDePersonas - 3}`)
  }else if(numeroDePersonas >= 11){
    alert("¡Son demasiados, el límite es de 10!")      
}else{break}  
  
}


    