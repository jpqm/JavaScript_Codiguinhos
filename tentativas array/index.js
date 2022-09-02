let array = [];
let tent = 0;
let achou = false;
let array2 = [];

const inicio = performance.now();

for(let k = 0; k < 10; k+=1){

    let x = Math.floor(Math.random()*5 +1);
    array[k] = x;

}

let i = array.length;

console.log(...array);

while(!achou) {
    tentativas(i);
    let iguais=0;
    for(let k = 0; k < i; k+=1){
        if(array2[k] == array[k]){
        iguais++
    }
}
    if(iguais==10)
        achou=true;

    tent++;
}

console.log(...array2);
console.log(tent + " tentativas");

const fim = performance.now();

document.getElementById("array1"). innerHTML = array;
document.getElementById("array2"). innerHTML = array2;
document.getElementById("tentativas"). innerHTML = tent.toLocaleString("pt-BR") + " tentativas";

document.getElementById("tempo"). innerHTML = `${(fim - inicio)/1000} segundos`;

function tentativas(j){
    for(let k = 0; k < j; k+=1){
        let x = Math.floor(Math.random()*5 +1);
        array2[k] = x;
    }
    //console.log(tent +" - "+ array2);
}