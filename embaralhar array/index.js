let array = [];

let i;

for(i = 0; i < 10; i+=1){

    array[i] = i + 1;

}

console.log(...array);

while(i != 0){

    let randomindex = Math.floor(Math.random() * array.length);
    i-= 1;

    let temp = array[i];
    array[i] = array[randomindex];
    array[randomindex] = temp;

}

console.log(...array);
