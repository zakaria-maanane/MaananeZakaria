document.addEventListener("DOMContentLoaded", () => {
    const text = document.querySelector("h1 span");
    const words = ["Zakaria", "un passionné", "d'IA-Data"];
    let i = 0;

    setInterval(() => {
        text.textContent = words[i];
        i = (i + 1) % words.length;
    }, 3000);
});
