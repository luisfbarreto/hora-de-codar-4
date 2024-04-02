//Crie um programa onde o usuário possa cadastrar estudantes sem limites, e, em seguida, Se o usuário digitar "PARE" o programa deve exibir a quantidade de estudantes cadastrados e a lista com cada um deles. 

function ex1(){ 
    let numeroEstudante = 0;
    let listaEstudante = [];
    let nome;
    let continuar = 0;
    let i = 1;
    do {
        let nome = prompt('Digite um nome: \nOu digite PARE para encerrar: ');
        if(nome == 'PARE' || nome == 'Pare' || nome == 'pare' ){
            alert(`Voce digitou ${numeroEstudante} nomes de estudantes \nNomes dos Estudantes:` + listaEstudante)         
            continuar++
        } else if( nome !== 'PARE' || nome !== 'Pare' || nome !== 'pare' ){
            listaEstudante += `\n${i}°-` + nome;
            i++
            numeroEstudante++
        }       
    } while(continuar < 1){}
}

//Crie uma array de planetas que inclua "Terra", "Marte", "Plutão", "Vênus", "Júpiter", "Saturno"  e, em seguida, peça ao usuário para digitar o nome de um planeta. 
//Verifique se o planeta que o usuário informou está na array e informe ao usuário.

function ex2(){
    
    let planetas = ["Terra","Marte", "Plutão", "Vênus", "Júpiter", "Saturno"]
    let nome = prompt('Qual o seu planeta favorito?')
    if(planetas.includes(nome) && nome !== "Saturno"){
        alert('Que ótimo! Seu planeta favorito é ' + nome) 
    }else if(planetas.includes(nome) && nome == 'Saturno'){
        alert('Excelente, obvio que Saturno é o planeta mais bonito🪐')
    } else {
        alert('Planeta desconhecido')
    }
} 
// Vamos criar uma lista de compras. 
// Crie uma array de frutas, exiba-a ao usuário e, em seguida, peça ao usuário para digitar o nome de uma das frutas.
// Caso a fruta esteja no array, remova-a e exiba a mensagem "Fruta foi retirada da lista". 
// Peça novamente para o usuário digitar o nome de uma fruta para ser removida. 
// Sempre que o usuário procurar por uma fruta que não está no array exiba a mensagem "Fruta indisponível no nosso mercado". 
// Quando o array não possuir mais itens dentro de si, escreva "Lista de compras finalizada".

function ex3(){

    let listaFrutas = ['Banana', 'Uva', 'Maçã', 'Morango', 'Manga']
    let confirmar;
    let frutaDisponivel = true;

    do {
        let exibir = prompt('Lista de frutas disponiveis:\n' + listaFrutas.join(', \n') + '\n\nQual fruta deseja comprar? (digite "fim" para finalizar a compra!)')
        let index = listaFrutas.indexOf(exibir)
        if (listaFrutas.length < 1 || exibir == 'fim' ) {
        alert("Lista de compras finalizada")
        frutaDisponivel = false;
        break;
    }
        if(index > -1) {
            listaFrutas.splice(index, 1);
            alert(exibir + ' foi retirada da lista')
        } else{
            alert('Fruta indisponível no nosso mercado')
        }

    } while(frutaDisponivel == true){}
}