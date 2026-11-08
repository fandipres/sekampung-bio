// Tahun di footer, tombol tema (kelas "dark" + localStorage), tombol bagikan, dan animasi muncul.
// Kelas "dark" awal dipasang oleh skrip kecil di <head> agar tidak berkedip.
(function () {
  var akar = document.documentElement;

  function simpan(k, v) {
    try { localStorage.setItem(k, v); } catch (e) { /* mode privat */ }
  }

  var tombolTema = document.getElementById("tombol-tema");
  if (tombolTema) {
    tombolTema.addEventListener("click", function () {
      simpan("tema", akar.classList.toggle("dark") ? "dark" : "light");
    });
  }

  var thn = document.getElementById("tahun");
  if (thn) thn.textContent = new Date().getFullYear();

  var bagikan = document.getElementById("tombol-bagikan");
  if (bagikan) {
    bagikan.addEventListener("click", function () {
      var data = { title: document.title, url: location.href };
      if (navigator.share) {
        navigator.share(data).catch(function () {});
      } else if (navigator.clipboard) {
        navigator.clipboard.writeText(location.href).then(function () {
          bagikan.setAttribute("aria-label", "Tautan disalin");
          bagikan.textContent = "✓";
        });
      }
    });
  }

  var animasi = document.querySelectorAll(".fade-in, .fade-in-up");
  if (!("IntersectionObserver" in window)) {
    animasi.forEach(function (el) { el.classList.add("visible"); });
    return;
  }
  var pengamat = new IntersectionObserver(function (daftar) {
    daftar.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add("visible"); pengamat.unobserve(e.target); }
    });
  }, { threshold: 0.15 });
  animasi.forEach(function (el) { pengamat.observe(el); });
})();
