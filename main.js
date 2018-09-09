var płótno = document.getElementById("płótno");
var kontekst = płótno.getContext("2d");
var szerokość = płótno.width;
var wysokość = płótno.height;

var rozmiarBloku = 10;
var szerokośćWBlokach = szerokość / rozmiarBloku;
var wysokośćWBlokach = wysokość / rozmiarBloku;

var wynik = 0;

var rysujObramowanie = function () {
    kontekst.fillStyle = "Gray";
    kontekst.fillRect(0, 0, szerokość, rozmiarBloku);
    kontekst.fillRect(0, wysokość - rozmiarBloku, szerokość, rozmiarBloku);
    kontekst.fillRect(0, 0, rozmiarBloku, szerokość);
    kontekst.fillRect(szerokość - rozmiarBloku, 0, rozmiarBloku, wysokość);
};

var rysujWynik = function () {
    kontekst.font = "20px Courier";
    kontekst.fillStyle = "Black";
    kontekst.textAlign = "left";
    kontekst.textBaseline = "top";
    kontekst.fillText("Wynik: " + wynik, rozmiarBloku, rozmiarBloku);
};

var koniecGry = function () {
    clearInterval(IdPrzedziału);
    kontekst.font = "60px Courier";
    kontekst.fillStyle = "Black";
    kontekst.textAlign = "center";
    kontekst.textBaseline = "middle";
    kontekst.fillText("Game Over", szerokość / 2, wysokość / 2);
}

koniecGry();