const resp = Math.floor(Math.random() * 30) + 1;
let chutes = 0;

console.log(resp);

document.getElementById("enviar").onclick = function(){

    let chute = document.getElementById("num").value;
    chutes += 1;

    if(chute == resp){

        window.alert(`mt bem, o numero era ${chute} msm vc eh um genio`);
        document.getElementById("resposta").innerHTML = `acertou ja`;

    }else if(chute < resp){

        document.getElementById("resposta").innerHTML = `mt baixo`;

    }else{

        document.getElementById("resposta").innerHTML = `mt alto`;

    }

    document.getElementById("chutes").innerHTML = `chutes: ${chutes}`;

}