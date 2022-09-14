// program to shuffle the deck of cards

// declare card elements
const suits = ["Espadas", "Diamantes", "Paus", "Copas"];
const values = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];

// empty array to contain cards
let deck = [];

// create a deck of cards
for (let i = 0; i < suits.length; i++) {
    for (let x = 0; x < values.length; x++) {
        let card = { Value: values[x], Suit: suits[i] };
        deck.push(card);
    }
}

// shuffle the cards
for (let i = deck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
}

let j = 0;
let jogadores = []; //gera array para cartas de jogadores
let player = []; //gera array para cartas do jogador principal
let floparray = []; // gera array para flop
let jognumb = Number(prompt("qnt de jogadores"));
let vc = Number(prompt("seu numero"));

/*for(let i = 0; i < 2; i++){

    deal(j);
    j = j + jognumb;

}*/

//printa cartas de todos os jogadores
/*for(let i = 0; i < jognumb; i++){

    console.log(`jogador ${i +1}: ${jogadores[i].Value} ${jogadores[i].Suit} / ${jogadores[i+jognumb].Value} ${jogadores[i+jognumb].Suit}`)

}*/

//printa cartas do jogador principal
//console.log(`suas cartas: ${player[0].Value} ${player[0].Suit} / ${player[1].Value} ${player[1].Suit}`);

document.getElementById("deal").onclick = function(){

    for(let i = 0; i < 2; i++){

        deal(j);
        j = j + jognumb;
    
    }

    for(let i = 0; i < jognumb; i++){

        console.log(`jogador ${i +1}: ${jogadores[i].Value} ${jogadores[i].Suit} / ${jogadores[i+jognumb].Value} ${jogadores[i+jognumb].Suit}`)
    
    }

    console.log(`suas cartas: ${player[0].Value} ${player[0].Suit} / ${player[1].Value} ${player[1].Suit}`);
    
    document.getElementById("cartas").innerHTML = `suas cartas: ${player[0].Value} ${player[0].Suit} / ${player[1].Value} ${player[1].Suit}`;

}

document.getElementById("flop").onclick = function(){

    j = j + jognumb;
    flop(j);

}

document.getElementById("turn").onclick = function(){

    turn(j+3);

}

document.getElementById("river").onclick = function(){

    river(j+4);

}

/*j = j + jognumb;
flop(j);
turn(j+3);
river(j+4);*/

//distribuir cartas para todos os jogadores
function deal(j){

    let k = 1;

    for(let i = 0; i <jognumb; i++){

        if(k == vc){

            let card = deck[i+j];
            player.push(card);

        }
        let card = deck[i+j];
        jogadores[i+j] = card;
        k++;

    }

}

//joga flop
function flop(j){

    console.log(`flop: `)

    for(let i = 0; i < 3; i++){

        let card = deck[i+j];
        floparray[i] = card;
        console.log(`       ${floparray[i].Value} ${floparray[i].Suit}`);
        if(i == 0)
            document.getElementById("floplbl1").innerHTML = `${floparray[i].Value} ${floparray[i].Suit}`;
        if(i == 1)
            document.getElementById("floplbl2").innerHTML = `${floparray[i].Value} ${floparray[i].Suit}`;
        if(i == 2)
            document.getElementById("floplbl3").innerHTML = `${floparray[i].Value} ${floparray[i].Suit}`;

    }

}


function turn(j){

    console.log(`turn : ${deck[j].Value}-${deck[j].Suit}`);
    document.getElementById("turnlbl").innerHTML = `${deck[j].Value} ${deck[j].Suit}`

}

function river(j){

    console.log(`river : ${deck[j].Value}-${deck[j].Suit}`);
    document.getElementById("riverlbl").innerHTML = `${deck[j].Value} ${deck[j].Suit}`

}