let count = 0;

document.getElementById("aumenta").onclick = function(){

    count += 1;
    document.getElementById("count").innerHTML = count;

}

document.getElementById("diminui").onclick = function(){

    count -= 1;
    document.getElementById("count").innerHTML = count;
    
}

document.getElementById("aumenta5").onclick = function(){

    count += 5;
    document.getElementById("count").innerHTML = count;

}

document.getElementById("diminui5").onclick = function(){

    count -= 5;
    document.getElementById("count").innerHTML = count;
    
}

document.getElementById("aumenta10").onclick = function(){

    count += 10;
    document.getElementById("count").innerHTML = count;

}

document.getElementById("diminui10").onclick = function(){

    count -= 10;
    document.getElementById("count").innerHTML = count;
    
}

document.getElementById("reset").onclick = function(){

    count = 0;
    document.getElementById("count").innerHTML = count;
    
}