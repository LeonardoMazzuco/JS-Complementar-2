// Determinar se dois números são múltiplos:
// 1) Inserir números a serem verificados
// 2) Verificar se um é múltiplo do outro
// 3) Mostrar resultado

function VerificaMultiplo(){
    alert("Insira dois números e descubra se um é múltiplo do outro")
    var num1 = prompt("Insira um número:")
    
    var num2 = prompt("Insira outro número:")
    
    
    var resultado1 = parseInt(num1) % parseInt(num2) 
    var resultado2 = parseInt(num2) % parseInt(num1) 

        if (resultado1 === 0){
            alert(num1 + " É múltiplo de " +num2)
        }
        else if(resultado2 === 0){
            alert(num2 + " é múltíplo de " + num1)
        }
        else{
            alert("Os números não são múltiplos um do outro.")
        }
}

VerificaMultiplo()


