document.getElementById("form-pemesanan").addEventListener("submit", function(event) {
    event.preventDefault(); // Menghentikan form agar tidak dilakukan submit
  
    // Mengambil nilai dari input form
    var nama = document.getElementById("nama").value;
    var jumlahTiket = document.getElementById("jumlah-tiket").value;
    var hargaTiket = document.getElementById("harga").value;
  
    // Menghitung total harga
    var totalHarga = jumlahTiket * hargaTiket;
  
    // Mendapatkan status pemesanan
    var statusPemesanan;
    var tanggalPemesanan = new Date();
    var tanggalHariIni = new Date();
  
    if (tanggalPemesanan > tanggalHariIni) {
      statusPemesanan = "Dalam proses";
    } else {
      statusPemesanan = "Selesai";
    }
  
    // Menampilkan hasil pemesanan di elemen hasil-pemesanan
    var hasil = "Terima kasih, " + nama + "! Pemesanan tiket Anda dengan jumlah " + jumlahTiket + " tiket berhasil. Status pemesanan: " + statusPemesanan + ". Total harga yang harus dibayar adalah " + totalHarga + " Rupiah.";
    document.getElementById("hasil-pemesanan").textContent = hasil;
  });
  