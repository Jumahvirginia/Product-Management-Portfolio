var T = {
  home: "Virginia N. Juma | Product Management Portfolio",
  "case-studies": "Case studies | Virginia N. Juma",
  "case-study": "Making stock transfers accountable | Virginia N. Juma",
  about: "About | Virginia N. Juma",
  contact: "Contact | Virginia N. Juma",
  nf: "Page not found | Virginia N. Juma",
};
var sv = document.querySelector("#v-case-study .fig svg");
if (sv) document.getElementById("pv").appendChild(sv.cloneNode(true));
var c = document.getElementById("fc").cloneNode(true);
c.removeAttribute("id");
c.querySelector(".pv").removeAttribute("id");
c.querySelector(".cta").insertAdjacentHTML(
  "beforebegin",
  '<span class="mono" style="margin:8px 0 4px">What’s inside</span><ul class="in"><li>The assumption I got wrong</li><li>The two-way confirmation flow</li><li>What I’d do differently</li></ul>',
);
document.getElementById("csc").appendChild(c);
function show() {
  var h = (location.hash || "#home").slice(1),
    id = T[h] && h !== "nf" ? h : "nf";
  document.querySelectorAll(".view").forEach(function (v) {
    v.classList.toggle("on", v.id === "v-" + id);
  });
  document.querySelectorAll("nav a").forEach(function (a) {
    var t = a.getAttribute("href");
    a.classList.toggle(
      "cur",
      t === "#" + id || (id === "case-study" && t === "#case-studies"),
    );
  });
  document.title = T[id];
  window.scrollTo(0, 0);
}
addEventListener("hashchange", show);
show();
var R = document.documentElement,
  tm = document.getElementById("tm");
function setT(t) {
  if (t === "dark") R.setAttribute("data-theme", "dark");
  else R.removeAttribute("data-theme");
  tm.setAttribute("aria-pressed", t === "dark");
  tm.setAttribute(
    "aria-label",
    t === "dark" ? "Switch to light mode" : "Switch to dark mode",
  );
  try {
    localStorage.setItem("t", t);
  } catch (e) {}
}
try {
  if (localStorage.getItem("t") === "dark") setT("dark");
} catch (e) {}
tm.addEventListener("click", function () {
  setT(R.getAttribute("data-theme") === "dark" ? "light" : "dark");
});
