// Example: Alert when clicking the bot link
document.addEventListener("DOMContentLoaded", () => {
    const botLink = document.querySelector(".button");
    botLink.addEventListener("click", () => {
        alert("Redirecting you to our Telegram bot...");
    });
});
