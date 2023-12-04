/*
Adjectives:
Crazy
Amazing
Fire

shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub
*/
function Name_store(ad , sn ,aw){
    console.log(ad + sn + aw);
}
let x = Math.random()*10;
let y = Math.random()*10;
let z = Math.random()*10;
let adjective;
let shopName;
let anotherWord;

if(x < 3){
    adjective = "Crazy";
}
else if (x >3 && x<7){
    adjective = "Amazing";
    }
else{
    adjective = "Fire" ;
}
if(y < 3){
    shopName = "Engine";
}
else if (y >3 && y<7){
    shopName = "Foods";
    }
else{
    shopName ="Garments";
}
if(z < 3){
    anotherWord = "Bros";
}
else if (z >3 && z<7){
    anotherWord = "Limited";
    }
else{
    anotherWord = "Hub";
}

Name_store(adjective,shopName,anotherWord);