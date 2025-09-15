// Create title
const title = document.createElement("h1");
title.textContent = "Alexander Speigle";
title.style.textAlign = "center";
title.style.marginBottom = "40px";
title.style.fontSize = "3rem";
document.body.appendChild(title);
// Container for cards
const container = document.createElement("div");
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.gap = "20px";
container.style.maxWidth = "400px";
container.style.margin = "0 auto";
document.body.appendChild(container);
// Card data
const cards = [
    { label: "Email", value: "alex@example.com", type: "copy", icon: "📋" },
    { label: "Phone", value: "123-456-7890", type: "copy", icon: "📋" },
    { label: "LinkedIn", value: "https://linkedin.com/in/alex", type: "link", icon: "🔗" },
    { label: "GitHub", value: "https://github.com/alex", type: "link", icon: "🔗" },
];
// Function to copy text using a temporary textarea
function copyText(text) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    try {
        document.execCommand("copy");
        alert(`${text} copied!`);
    }
    catch {
        alert("Failed to copy");
    }
    document.body.removeChild(textarea);
}
// Create cards dynamically
cards.forEach(({ label, value, type, icon }) => {
    const card = document.createElement("div");
    card.textContent = `${icon} ${label}: ${value}`;
    card.style.background = "white";
    card.style.padding = "20px";
    card.style.borderRadius = "12px";
    card.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
    card.style.cursor = "pointer";
    card.onmouseover = () => (card.style.boxShadow = "0 8px 20px rgba(0,0,0,0.2)");
    card.onmouseout = () => (card.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)");
    // Click behavior based on type
    card.onclick = () => {
        if (type === "copy") {
            copyText(value);
        }
        else if (type === "link") {
            window.open(value, "_blank");
        }
    };
    container.appendChild(card);
});
// Floating profile image in bottom-left corner
const floatingImage = document.createElement("img");
floatingImage.src = "/public/suit-picture-crop.png"; // serve from public folder
floatingImage.alt = "Profile Image";
floatingImage.style.position = "fixed";
floatingImage.style.bottom = "20px";
floatingImage.style.left = "20px";
floatingImage.style.width = "100px";
floatingImage.style.height = "100px";
floatingImage.style.borderRadius = "50%";
floatingImage.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
floatingImage.style.cursor = "pointer";
floatingImage.onclick = () => alert("This is Alexander Speigle!");
document.body.appendChild(floatingImage);
export {};
