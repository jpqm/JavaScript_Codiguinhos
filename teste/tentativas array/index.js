let array = [];
let tent = 0;
let array2 = [];

for(let k = 0; k < 5; k+=1){

    let x = Math.floor(Math.random()*5 +1);
    array[k] = x;

}

let i = array.length;

console.log(...array);

tentativas(i);

console.log(...array2);
console.log(tent);

function tentativas(j){

    for(let k = 0; k < j; k+=1){

        let x = Math.floor(Math.random()*5 +1);
        array2[j] = x;
    
    }

    for(let k = 0; k < j; k+=1){

        if(array2[k] == array[k]){

            continue;

        }else{

            tentativas(i);

        }

    }

    tent+=1;

}