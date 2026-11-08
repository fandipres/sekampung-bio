// Tahun di footer, tombol tema (tersimpan di localStorage), dan tombol bagikan.
(function () {
  var akar = document.documentElement;

  function simpan(k, v) {
    try { localStorage.setItem(k, v); } catch (e) { /* mode privat */ }
  }
  function baca(k) {
    try { return localStorage.getItem(k); } catch (e) { return null; }
  }

  var tema = baca("tema");
  if (tema === "light" || tema === "dark") akar.setAttribute("data-theme", tema);

  var tombolTema = document.getElementById("tombol-tema");
  if (tombolTema) {
    tombolTema.addEventListener("click", function () {
      var gelap = akar.getAttribute("data-theme") === "dark" ||
        (!akar.getAttribute("data-theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);
      var baru = gelap ? "light" : "dark";
      akar.setAttribute("data-theme", baru);
      simpan("tema", baru);
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
})();
