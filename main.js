document.getElementById("PEMESANAN TIKET").addEventListener("submit", function(event) {
    event.preventDefault(); // Menghentikan form agar tidak dilakukan submit
  
    // Mengambil nilai dari input form
    var masukan nama = document.getElementById("nama").value;
    var jmlTiket = document.getElementById("jmltiket").value;
    var destinasi = document.getElementById("destinasi").value;
    var status = document.getElementById("status").value;
    var hasil = "Terima kasih, " + nama + "! Pemesanan tiket Anda dengan jumlah " + jumlahTiket + " tiket berhasil. Status pemesanan: " + statusPemesanan + ". Total harga yang harus dibayar adalah " + totalHarga + " Rupiah.";
    document.getElementById("hasil-pemesanan").textContent = hasil;
  });
  