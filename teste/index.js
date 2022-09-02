let array = [];
let i = 0;
let tent = 0;

for(let k = 0; k < 10; k+=1){

    let x = Math.floor(Math.random()*10 +1);
    array[k] = x;

}

console.log(...array);

while(i < array.length){

    tentativas(i);

}

console.log(tent);

function tentativas(j){

    let r = Math.floor(Math.random()*10 +1);

    if(r == array[j]){

        i+=1;
        tent+=1;

    }else{

        tent+=1;

    }

}