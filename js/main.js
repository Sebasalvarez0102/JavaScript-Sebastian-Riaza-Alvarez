const frases = [
    {
        "frase": "Sin embargo, aunque no podemos adivinar el mundo que será, bien podemos imaginar el que queremos que sea. El derecho de soñar no figura entre los treinta derechos humanos que las Naciones Unidas proclamaron a fines de 1948. Pero si no fuera por él, y por las aguas que da de beber, los demás derechos se morirían de sed",
        "autor": "Eduardo Galeano"
    },
    {
        "frase": "La educación es algo admirable, pero es bueno recordar de cuando en cuando que nada de lo que merece la pena saber puede ser enseñado",
        "autor": "Oscar Wilde"
    },
    {
        "frase": "Cuando es verdadera, cuando nace de la necesidad de decir, a la voz humana no hay quien la pare. Si le niegan la boca, ella habla por las manos, o por los ojos, o por los poros, o por donde sea",
        "autor": "Eduardo Galeano"
    },
    {
        "frase": "Nunca pensé que en la felicidad hubiera tanta tristeza",
        "autor": "Mario Benedetti"
    },
    {
        "frase": "Las cosas simples son las más extraordinarias y sólo los sabios consiguen verlas",
        "autor": "Paulo Coelho"
    }
]

var i = 1;
var playing = true

document.getElementById("frase").innerHTML = frases[0].frase
document.getElementById("autor").innerHTML = "-"+frases[0].autor

timer = setInterval(() => {
        if(!playing) return;
        console.log(i)
        document.getElementById("frase").innerHTML = frases[i].frase
        document.getElementById("autor").innerHTML = "-"+frases[i].autor
        i++;
        if (i == frases.length) i=0;
    }
    , 7000)

const pause = () => {
    playing=false;
    document.getElementById("pause").style.display ="none"
    document.getElementById("play").style.display ="inline-block"
}

const play = () => {
    playing=true;
    document.getElementById("pause").style.display ="inline-block"
    document.getElementById("play").style.display ="none"
}