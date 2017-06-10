'use strict';
//instrukcje warunkowe if, if-else, else-if, switch //

var wzrostMateusza = 170;
var wzrostOli = 150;

//warunek if//

if ( wzrostOli < wzrostMateusza){
    console.log("Ola jest niższa");
}

//warunek if-else//

if ( wzrostOli > wzrostMateusza)
{ console.log("ola jest wyższa");}

else {
    console.log( "ola jest niższa");
}

//warunek else-if//


if ( wzrostOli > wzrostMateusza){
    console.log("ola jest wyższa");
}

else if ( wzrostOli == wzrostMateusza){
    console.log(" olga jest równa z mateuszem");
    
}

else {
    console.log("ola jest niższa");
}


//warunek switch- przyrónywanie do wyników//

var kolor = 'zielony';

switch (kolor) {
        
    case 'czerwony':
        console.log("kolor czerwony");
        break;
    case 'zielony':
        console.log( 'kolor zielony');
//        break;
    case 'niebieski':
        console.log( 'kolor niebieski');
//        break;
    default: 
        console.log('inny kolor');
  }












