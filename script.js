window.onload = () => {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3000);
};


function changeText() {
  const phrases = [
    "I am a Systems Engineering student and a coder at Riwi, passionate about software development.",
    "I focus on building modern web solutions and learning new technologies every day 💻",
    "Welcome to my portfolio 🐾",
  ];
  const el = document.getElementById("mensaje");
  const current = phrases.indexOf(el.textContent);
  el.textContent = phrases[(current + 1) % phrases.length];
}


function toggleContact(event) {
  const extra = document.getElementById("extra");
  const btn = event.target;
  extra.classList.toggle("oculto");
  btn.textContent = extra.classList.contains("oculto") ? "Show form 📬" : "Hide form ✖";
}
