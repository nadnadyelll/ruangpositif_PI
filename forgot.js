document.addEventListener("DOMContentLoaded", function () {
  var otpInputs = document.querySelectorAll(".otp-box input[type='text']");

  otpInputs.forEach(function (input, index) {
    input.addEventListener("input", function () {
      if (this.value.length >= 1) {
        // Pindahkan fokus ke input berikutnya jika ada
        if (index < otpInputs.length - 1) {
          otpInputs[index + 1].focus();
        }
      }
    });

    input.addEventListener("keydown", function (e) {
      if (e.key === "Backspace") {
        // Cek apakah kotak masukan kosong sebelum menghapus karakter
        if (this.value.length === 0) {
          e.preventDefault(); // Mencegah penghapusan karakter jika kotak kosong

          // Pindahkan fokus ke input sebelumnya jika ada
          if (index > 0) {
            otpInputs[index - 1].focus();
          }
        }
      }
    });
  });
});
