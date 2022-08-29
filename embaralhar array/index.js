let array = [];

let i;

for(i = 0; i < 10; i+=1){

    array[i] = i + 1;

}

document.getElementById("lbl1").innerHTML = array;

while(i != 0){

    let randomindex = Math.floor(Math.random() * array.length);
    i-= 1;

    let temp = array[i];
    array[i] = array[randomindex];
    array[randomindex] = temp;

}

document.getElementById("lbl2").innerHTML = array;

console.log(array);