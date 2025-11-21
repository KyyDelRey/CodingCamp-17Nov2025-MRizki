document.addEventListener("DOMContentLoaded", function () {
  let userName = prompt("Tolong Masukan Nama Anda:", "Pendatang");

  if (!userName || userName.trim() === "") {
    userName = "Pendatang";
  }

  const nameElement = document.getElementById("nama-pengunjung");
  if (nameElement) {
    nameElement.textContent = userName;
  }

  const contactForm = document.getElementById("contactForm");
  const formResult = document.getElementById("formResult");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("inputName").value;
      const email = document.getElementById("inputEmail").value;
      const message = document.getElementById("inputMessage").value;

      if (name === "" || email === "" || message === "") {
        alert("Tolong isi semua kolom.");
        return;
      }

      document.getElementById("resultName").textContent = name;
      document.getElementById("resultEmail").textContent = email;
      document.getElementById("resultMessage").textContent = message;

      formResult.classList.remove("hidden");

      contactForm.reset();
    });
  }
});
