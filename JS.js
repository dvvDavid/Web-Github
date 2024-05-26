
let vides=3;
const array_preguntes=[];
let v;
let pregunta_random=Math.floor(Math.random()*6)+1;
let array_random=Math.floor(Math.random()*8);
let sense_repetir=[0,0,0,0,0,0];
let contador=0;
const array_preguntes_cine = [
    {
        tema: "Cinema"
    },
    {
        pregunta: "Quina pel·lícula va guanyar l'Oscar a la millor pel·lícula el 2020?",
        respostes: ["a) Nomadland", "b) 1917", "c) Joker", "d) Parasite"],
        respostes_correctes: 3
    },
    {
        pregunta: "Quin és el títol de la pel·lícula de ciència-ficció dirigida per Christopher Nolan que es va estrenar el 2014?",
        respostes: ["a) Interstellar", "b) Dunkirk", "c) The Prestige", "d) Inception"],
        respostes_correctes: 3
    },
    {
        pregunta: "Qui va dirigir la pel·lícula 'El Padrino'?",
        respostes: ["a) Francis Ford Coppola", "b) Martin Scorsese", "c) Quentin Tarantino", "d) Steven Spielberg"],
        respostes_correctes: 0
    },
    {
        pregunta: "Qui va guanyar l'Oscar a la millor actriu pel seu paper a 'La La Land'?",
        respostes: ["a) Emma Stone", "b) Jennifer Lawrence", "c) Meryl Streep", "d) Natalie Portman"],
        respostes_correctes: 2
    },
    {
        pregunta: "Quin és el director de la saga 'Harry Potter'?",
        respostes: ["a) Christopher Columbus", "b) J.K. Rowling", "c) Peter Jackson", "d) Steven Spielberg"],
        respostes_correctes: 0
    },
    {
        pregunta: "Quin actor va interpretar el paper de Joker a 'The Dark Knight'?",
        respostes: ["a) Heath Ledger", "b) Jack Nicholson", "c) Jared Leto", "d) Joaquin Phoenix"],
        respostes_correctes: 1
    },
];
const array_preguntes_historia=[
    {
        tema: "Història"
    },
    {
        pregunta:"Quin país va ser governat per Napoléon Bonaparte?",
        respostes:["a) França","b) Itàlia","c) Espanya","d) Alemanya"],
        respostes_correctes: 0
    },
    {
        pregunta:" En quin any va succeir la Revolució Francesa?",
        respostes:["a) 1789","b) 1804","c) 1820","d) 1848"],
        respostes_correctes: 0
    },
    {
        pregunta:" Quina civilització va construir les piràmides de Gizeh?",
        respostes:["a) Egípcia","b) Grega","c) Romana","d) Babilònica"],
        respostes_correctes: 0
    },
    {
        pregunta:" Quin any va començar la Primera Guerra Mundial?",
        respostes:["a) 1914","b) 1905","c) 1918","d) 1922"],
        respostes_correctes: 0
    },
    {
        pregunta:" Qui va ser el primer president dels Estats Units?",
        respostes:["a) George Washington","b) Thomas Jefferson","c) Abraham Lincoln","d) John Adams"],
        respostes_correctes:0
    },
    {
        pregunta:"12) Qui va ser el líder de la Revolució Russa de 1917?",
        respostes:["a) Lenin","b) Stalin","c) Rasputin","d) Trotsky"],
        respostes_correctes: 0
    }
];

const array_preguntes_literatura = [
    {
        tema: "Literatura"
    },
    {
        pregunta: "Qui va escriure el llibre 'Cien años de soledad'?",
        respostes: ["a) Jorge Luis Borges", "b) Mario Vargas Llosa", "c) Pablo Neruda", "d) Gabriel García Márquez"],
        respostes_correctes: 3
    },
    {
        pregunta: "Quin és el títol del primer llibre de la saga de Harry Potter?",
        respostes: ["a) Harry Potter i l'orde del Fènix", "b) Harry Potter i el calze de foc", "c) Harry Potter i la pedra filosofal", "d) Harry Potter i el pres d'Azkaban"],
        respostes_correctes: 2
    },
    {
        pregunta: "Qui va escriure 'Don Quijote de la Mancha'?",
        respostes: ["a) Miguel de Cervantes", "b) Gabriel García Márquez", "c) Federico García Lorca", "d) Pablo Neruda"],
        respostes_correctes: 0
    },
    {
        pregunta: "Quin autor va escriure 'Matar un ruiseñor'?",
        respostes: ["a) John Steinbeck", "b) Ernest Hemingway", "c) F. Scott Fitzgerald", "d) Harper Lee"],
        respostes_correctes: 3
    },
    {
        pregunta: "Qui va escriure la sèrie de llibres 'Crepúsculo'?",
        respostes: ["a) J.K. Rowling ", "b) Stephenie Meyer ", "c) Suzanne Collins", "d) Veronica Roth"],
        respostes_correctes: 1
    },
    {
        pregunta: "Quin és el títol del primer llibre de 'The Hunger Games'?",
        respostes: ["a) Catching Fire", "b) The Hunger Games", "c) Mockingjay", "d) Divergent"],
        respostes_correctes: 1
    },
];
const array_preguntes_videojocs=[
{
    tema: "Videojocs"
},
{
    pregunta:" Qui és el personatge principal de la saga de videojocs 'The Legend of Zelda'?",
    respostes:["a) Sonic ","b) Mario","c) Link","d) Donkey Kong"],
    respostes_correctes:2
},
{
    pregunta:" Quin videojoc va popularitzar el gènere de les batalles reials (battle royale)?",
    respostes:["a) PlayerUnknown's Battlegrounds (PUBG)","b) Fortnite","c) Call of Duty: Modern Warfare","d) Apex Legends"],
    respostes_correctes:0
},
{

    pregunta:"Quin és el nom del protagonista del videojoc 'Assassin's Creed' original?",
    respostes:["a) Ezio ","b) Altair","c) Connor","d) Edward"],
    respostes_correctes:1
},
{
    pregunta:"Quin és el nom del protagonista del videojoc 'The Witcher 3: Wild Hunt'?",
    respostes:["a) Ciri ","b) Geralt de Rivia","c) Yennefer","d) Vesemir"],
    respostes_correctes:1
},
{
    pregunta:"Quin videojoc va ser desenvolupat per la companyia Naughty Dog i va presentar el personatge “Nathan Drake”?",
    respostes:["a) Jak and Daxter","b) The Last of Us","c) Crash Bandicoot","d) Uncharted"],
    respostes_correctes:3
},
{
    pregunta:"Quin és el nom del personatge principal del videojoc 'Final Fantasy VII'?",
    respostes:["a) Cloud Strife","b) Squall Leonhart","c) Tidus","d) Zidane Tribal"],
    respostes_correctes: 0
}
];
const array_preguntes_geografia=[
{
    tema: "Geografia"
},
{
    pregunta:"Quin país té la població més gran del món?",
    respostes:["a) Brasil","b) Índia","c) Estats Units","d) Xina"],
    respostes_correctes:3
},
{
    pregunta:"Quina és la capital de Noruega?",
    respostes:["a)Copenhagen ","b) Estocolm","c) Helsinki","d) Oslo"],
    respostes_correctes:3
},
{
    pregunta:"Quin és el riu més llarg del món?",
    respostes:["a) Nil","b) Amazones","c) Mississipí","d) Yangtze"],
    respostes_correctes:1
},
{
    pregunta:"Quin és el país més gran del món per superfície terrestre?",
    respostes: ["a) Xina","b) Canadà","c) Rússia","d) Estats Units"],
    respostes_correctes: 2
},
{
    pregunta:"Quina és la ciutat més poblada del món?",
    respostes:["a) Tòquio","b) Xangai","c) Nova York","d) Mumbai"],
    respostes_correctes:0
},
{
    pregunta:"En quin continent es troba el desert del Sahara?",
    respostes:["a) Àsia ","b) Àfrica","c) Amèrica","d) Europa"],
    respostes_correctes:1
}
];
const array_preguntes_ciencia=[
    {
        tema: "Ciència"
    },
    {
        pregunta:" Quin element químic té el símbol H a la taula periòdica?",
        respostes:["a) Hidrogen","b) Hel·li","c) Hèli","d) Hàfnium"],
        respostes_correctes:0
    },
    {
        pregunta:"Quin és l'òrgan més gran del cos humà?",
        respostes:["a) La pell ","b) El cor","c) El fetge","d) El cervell"],
        respostes_correctes:0
    },
    {
        pregunta: "Quin és l'únic planeta del sistema solar que gira en sentit horari?",
        respostes:["a) Mercuri ","b) Mart","c) Venus","d) Júptier"],
        respostes_correctes:2
    },
    {
        pregunta:"Quina és l'acceleració de la gravetat a la superfície de la Terra en metres per segon quadrat (m/s^2)?",
        respostes:["a) 6.67 x 10^-11 m/s^2","b) 9.8 m/s^2","c) 1.62 m/s^2","d) 3.00 x 10^8 m/s^2"],
        respostes_correctes:1
    },
    {
        pregunta:"Quin és l'animal més venenós del món?",
        respostes:["a) Medusa de caixa ","b) Serp marina de taques","c) Araña bananera","d) Conus geographus (cargol conus)"],
        respostes_correctes:3
    },
    {
        pregunta: "Quin científic va formular la llei de la gravitació universal?",
        respostes:["a) Albert Einstein ","b) Galileo Galilei","c) Isaac Newton","d) Nikola Tesla"],
        respostes_correctes:2
    }
];
const array_preguntes_esports=[
    {
        tema: "Esports"
    },
    {
        pregunta:"Quin país va guanyar la Copa del Món de futbol del 2018?",
        respostes:["a) Croàcia","b) França","c) Alemanya","d) Brasil"],
        respostes_correctes:1
    },
    {
        pregunta:"Qui és considerat el millor jugador de tennis de tots els temps?",
        respostes:["a) Rafael Nadal ","b) Rod Laver","c) Roger Federer","d) Novak Djokovic"],
        respostes_correctes:2
    },
    {
        pregunta: "En quin esport es destaca Michael Phelps?",
        respostes:["a) Atletisme ","b) Ciclisme","c) Bàsquet","d) Natació"],
        respostes_correctes:3
    },
    {
        pregunta:"Quin jugador de bàsquet de la NBA és conegut com a The Greek Freak",
        respostes:["a) LeBron James","b) Giannis Antetokounmpo","c) Kevin Durant","d) Stephen Curry"],
        respostes_correctes:1
    },
    {
        pregunta:"Quin país va guanyar la Copa del Món de Rugbi del 2019?",
        respostes:["a) Sud-àfrica ","b)Nova Zelanda","c) Anglaterra","d) Austràlia"],
        respostes_correctes:0
    },
    {
        pregunta: "Qui va ser el primer pilot de Fòrmula 1 a guanyar set títols mundials?",
        respostes:["a) Michael Schumacher ","b) Juan Manuel Fangio","c) Ayrton Senna","d) Lewis Hamilton"],
        respostes_correctes:3
    }
];
const array_preguntes_musica=[
    {
        tema: "Música"
    },
    {
        pregunta:"Quin grup va llançar l'àlbum Dark Side of the Moon?",
        respostes:["a) The Beatles","b) Pink Floyd","c) Queen","d) Led Zeppelin"],
        respostes_correctes:1
    },
    {
        pregunta:"Qui va ser el cantant principal de la banda Queen?",
        respostes:["a) Freddie Mercury ","b) Mick Jagger","c) David Bowie","d) Elton John"],
        respostes_correctes:0
    },
    {
        pregunta: "Quina cantant va tenir l'àlbum '21' que va ser un gran èxit?",
        respostes:["a) Adele ","b) Beyoncé","c) Taylor Swift","d) Rihanna"],
        respostes_correctes:0
    },
    {
        pregunta:"Quin grup va llançar l'àlbum 'Abbey Road'?",
        respostes:["a) The Rolling Stones","b) The Beach Boys","c) The Who","d) The Beatles"],
        respostes_correctes:3
    },
    {
        pregunta:"Quina cançó va ser un gran èxit per Michael Jackson l'any 1982?",
        respostes:["a) Beat It ","b) Thriller","c) Billie Jean","d) Bad"],
        respostes_correctes:2
    },
    {
        pregunta: "Quin grup va llançar l'àlbum 'Dark Side of the Moon'?",
        respostes:["a) Queen","b) Pink Floyd","c) The Beatles","d) Led Zeppelin"],
        respostes_correctes:1
    }
];

array_preguntes.push(array_preguntes_historia);
array_preguntes.push(array_preguntes_geografia);
array_preguntes.push(array_preguntes_ciencia);
array_preguntes.push(array_preguntes_videojocs);
array_preguntes.push(array_preguntes_cine);
array_preguntes.push(array_preguntes_esports);
array_preguntes.push(array_preguntes_musica);
array_preguntes.push(array_preguntes_literatura);

function mostrar_preguntes(i){
    v=i;
    pregunta_random=Math.floor(Math.random()*6)+1;
    if (v==8) {
        array_random=Math.floor(Math.random()*8)+1;
    }
    while (sense_repetir[pregunta_random]==1) {
        console.log("Repetida");
        pregunta_random=Math.floor(Math.random()*6)+1;
    }
    sense_repetir[pregunta_random]=1;
    contador++;

    if (contador<7 && vides>0) {
        document.getElementById("primera").style.display="none";
        document.getElementById("segona").style.display="block";
        document.getElementById("preguntes").style.display="block";
        escriure_tema(i);
        print_cors();
        mostrar_pregunta(i,pregunta_random);
        mostrar_respostes(i,pregunta_random);
    }
    else{
        mort();
    }
}

function tornar_a_preguntar(){
    resetAnswers();
    mostrar_preguntes(v);
}

function mostrar_pregunta(i,pregunta_random){
    if (v<8) {
        document.getElementById("p1").innerText=array_preguntes[i][pregunta_random].pregunta;
    }
    else{
        document.getElementById("p1").innerText=array_preguntes[array_random][pregunta_random].pregunta;
    }
}

function mostrar_respostes(i,pregunta_random){
    for (let index = 0; index <4; index++) {
        if (v<8) {
            document.getElementById(`r${index}`).innerText=array_preguntes[i][pregunta_random].respostes[index];
        }
        else{
            document.getElementById(`r${index}`).innerText=array_preguntes[array_random][pregunta_random].respostes[index];
        }
    }
}

function respostaCorrecte(a){
    var correcte;
    if (v<8) {
        correcte=array_preguntes[v][pregunta_random].respostes_correctes;
    }
    else{
        correcte=array_preguntes[array_random][pregunta_random].respostes_correctes;
    }
    
    document.getElementById(`div${a}`).style.backgroundColor="red";
    document.getElementById(`div${correcte}`).style.backgroundColor="green";
    if (a!=correcte) {
        vides--;
        print_cors();
    }
    for (let index = 0; index < 4; index++) {
        const div = document.getElementById(`div${index}`);
        if (index!=correcte && index!=a) {
            div.style.display="none";
        }
        div.style.pointerEvents = "none";
    }
    mort()
} 

function redirigir_temes() {
    nom=document.getElementById("nom_usuari").value;
    if (nom!="") {
        document.getElementById("inici").style.display="none";
        document.getElementById("primera").style.display="block";
    }else{
        document.getElementById("error").style.display="block";
        document.getElementById("posar_nom").innerText="És obligatori posar un nom";
    }
}

function escriure_tema(i){
    if (v<8) {
        document.getElementById("tema").innerText=array_preguntes[i][0].tema;
    }
    else{
        document.getElementById("tema").innerText=array_preguntes[array_random][0].tema;
    }
}

function print_cors(){
    document.getElementById("cors").innerHTML="";
    for (let index = 0; index < vides; index++) {
        document.getElementById("cors").innerHTML+=`<img src="images/corazon.png" alt="vida1" class="corazonBomBomXD">`;
    }

    for (let index = 3-vides; index>0; index--) {
        document.getElementById("cors").innerHTML+=`<img src="images/corazon_vacio.png" alt="vida1" class="corazonBomBomXD1">`;
    }
}

function resetAnswers() {
    for (let index = 0; index < 4; index++) {
        const div = document.getElementById(`div${index}`);
        div.style.backgroundColor = "";
        div.style.display = "block";
        div.style.pointerEvents = "auto";
        div.disabled = false; 
    }
    document.getElementById("tornar").style.visibility = "hidden"; 
}

function mort(){
    let cont_preguntes=6-contador;
    if (vides>0 && contador<6) {
        document.getElementById("tornar").style.visibility="visible";
    }
    else{
        document.getElementById("preguntes").style.display="none";
        document.getElementById("segona").style.display="none";
        document.getElementById("no-vides").style.display="block";
        if (vides==0) {
            document.getElementById("crida").innerText=`${nom}, ja no et queden vides`;
            document.getElementById("total_preguntes").innerText=`Et quedaven ${cont_preguntes} preguntes per respondre`;
        }
        else{
            document.getElementById("crida").innerText=`${nom}, has completat 6 preguntes!!`;
        }
    } 
}

function iniciar(){
    window.location.href="HTML.html";
}