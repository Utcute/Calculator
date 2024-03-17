let sayilar = document.getElementsByClassName("sayi");
let islem = document.getElementsByClassName("islem");
let sil = document.getElementById("sil");
let esit = document.getElementById("esit");
let temzile = document.getElementById("temizle");
let ondalik = document.getElementById("ondalik");
let karekok = document.getElementById("karekok");
let us = document.getElementById("us");
let mod = document.getElementById("mod");
let fak = document.getElementById("faktoriyel");
let kaydet = document.getElementById("kaydet");
let gecmis = document.getElementById("gecmis");
let renk = document.getElementById("renkSec")
let sonuc = document.getElementById("sonuc");
let kayit = "";

load();

for (let i = 0; i < sayilar.length; i++) {
    sayilar[i].addEventListener("click", function () {
        sonuc.innerHTML += sayilar[i].innerHTML;
        enable();
    })
}

temzile.addEventListener("click", function () {
    sonuc.innerHTML = "";
    localStorage.removeItem("sonuc");
    localStorage.clear;
    enable();
})

for (let i = 0; i < islem.length; i++) {
    islem[i].addEventListener("click", function () {
        kayit = sonuc.innerHTML + islem[i].innerHTML;
        sonuc.innerHTML = "";
    })
}
esit.addEventListener("click", function () {
    kayit += sonuc.innerHTML;
    sonuc.innerHTML = eval(kayit);
    gecmis.innerHTML = kayit + "=" + eval(kayit) + "\n\n" + gecmis.innerHTML;
})

sil.addEventListener("click", function () {
    sonuc.innerHTML = sonuc.innerHTML.slice(0, -1);
    enable();
})

ondalik.addEventListener("click", disable);

karekok.addEventListener("click", function () {
    kayit = sonuc.innerHTML + "** 0.5";
    sonuc.innerHTML = "";
})

us.addEventListener("click", function () {
    kayit = sonuc.innerHTML + "**";
    sonuc.innerHTML = "";
})

mod.addEventListener("click", function () {
    kayit = sonuc.innerHTML + "%";
    sonuc.innerHTML = "";
})

fak.addEventListener("click", function () {
    let toplam = 1;
    for (let i = 1; i <= sonuc.innerHTML; i++) {
        toplam *= i;
    }
    sonuc.innerHTML = toplam;
})

kaydet.addEventListener("click", function () {
    if (sonuc.innerHTML != "") {
        localStorage.setItem("sonuc", sonuc.innerHTML);
        sonuc.innerHTML = "";
    }
    else {
        sonuc.innerHTML = localStorage.getItem("sonuc");
    }
})

renk.addEventListener("change", function () {
    changeColor(renk.value);
    localStorage.setItem("color", renk.value);
})

function disable() {
    for (let i = 0; i < islem.length; i++) {
        islem[i].disabled = true;
        islem[i].style.backgroundColor = "grey";
        mod.disabled = true;
        mod.style.backgroundColor = "grey";
        fak.disabled = true;
        fak.style.backgroundColor = "grey";
        us.disabled = true;
        us.style.backgroundColor = "grey";
        karekok.disabled = true;
        karekok.style.backgroundColor = "grey";
    }
}

function enable() {
    for (let i = 0; i < islem.length; i++) {
        islem[i].disabled = false;
        mod.disabled = false;
        fak.disabled = false;
        us.disabled = false;
        karekok.disabled = false;
        changeColor(localStorage.getItem("color"))
    }
}

function changeColor(color) {
    for (let i = 0; i < document.getElementsByTagName("button").length; i++) {
        document.getElementsByTagName("button")[i].style.backgroundColor = color;
    }
}

function load() {
    sonuc.innerHTML = localStorage.getItem("sonuc");
    changeColor(localStorage.getItem("color"));
}