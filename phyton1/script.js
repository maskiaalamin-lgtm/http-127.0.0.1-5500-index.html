// Isi surat
const isiSurat = `Hai Sayang ❤️

Terima kasih sudah hadir dalam hidupku.

Semoga setiap harimu dipenuhi
kebahagiaan, kesehatan,
dan semua impianmu tercapai.

Tetaplah menjadi dirimu sendiri,
karena itulah yang membuatmu istimewa.

Aku akan selalu mendukungmu
dan mendoakan yang terbaik untukmu.

❤️ I Love You ❤️`;

// Fungsi membuka surat
function bukaSurat(){

    // Hilangkan tombol
    document.getElementById("btnSurat").style.display = "none";

    // Tampilkan surat
    document.getElementById("surat").classList.remove("hidden");

    // Reset efek mengetik
    index = 0;
    document.getElementById("teks").innerHTML = "";

    // Mulai mengetik
    ketikSurat();

    // Putar musik otomatis
    const musik = document.getElementById("musik");
    musik.play().catch(function(error){
        console.log("Musik tidak dapat diputar:", error);
    });

}

// Efek mengetik
let index = 0;

function ketikSurat(){

    const teks = document.getElementById("teks");

    if(index < isiSurat.length){

        teks.innerHTML += isiSurat.charAt(index);

        index++;

        setTimeout(ketikSurat,40);

    }

}

// Membuat hati beterbangan
function buatHati(){

    const hati = document.createElement("div");

    hati.className = "heart";

    hati.innerHTML = "❤️";

    hati.style.left = Math.random()*100 + "vw";

    hati.style.fontSize = (20 + Math.random()*30) + "px";

    hati.style.animationDuration = (4 + Math.random()*4) + "s";

    document.body.appendChild(hati);

    setTimeout(function(){

        hati.remove();

    },8000);

}

// Membuat hati terus-menerus
setInterval(buatHati,300);