const jumlahFoto = 10; // Ubah angka ini sesuai jumlah foto di folder images
const container = document.getElementById('gallery-container');

// Generate foto otomatis
if (container) {
    for (let i = 1; i <= jumlahFoto; i++) {
        const div = document.createElement('div');
        div.className = 'photo-item';
        // Pastikan foto Anda bernama foto1.jpg, foto2.jpg, dst di folder images/
        div.innerHTML = `<img src="images/foto${i}.jpg" onclick="tampilkanFoto('images/foto${i}.jpg')" alt="Kenangan ${i}">`;
        container.appendChild(div);
    }
}

function tampilkanFoto(src) {
    document.getElementById("fullImage").src = src;
    document.getElementById("downloadBtn").href = src;
    document.getElementById("lightbox").style.display = "flex";
}

function tutupLightbox() {
    document.getElementById("lightbox").style.display = "none";
}