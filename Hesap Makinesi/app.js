Toplama.onclick = function mat() {
    var birinci = Number(document.getElementById("sayi1").value);
    var ikinci = Number(document.getElementById("sayi2").value);
    var toplam = birinci + ikinci;
    document.getElementById("goster").innerText = toplam;

}
Çikarma.onclick = function mat() {
    var birinci = Number(document.getElementById("sayi1").value);
    var ikinci = Number(document.getElementById("sayi2").value);
    var cikarma = birinci - ikinci;
    document.getElementById("goster").innerText = cikarma;
}

Çarpma.onclick = function mat() {
    var birinci = Number(document.getElementById("sayi1").value);
    var ikinci = Number(document.getElementById("sayi2").value);
    var çarpma = birinci * ikinci;
    document.getElementById("goster").innerText = çarpma;
}
Bölme.onclick = function mat() {
    var birinci = Number(document.getElementById("sayi1").value);
    var ikinci = Number(document.getElementById("sayi2").value);
    var bölme = birinci / ikinci;
    document.getElementById("goster").innerText = bölme;

}
