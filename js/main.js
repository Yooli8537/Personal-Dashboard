// Selecting Widgets
const title = document.querySelector("#widget-title");

// Getting Time
setInterval(() => {
  const now = new Date();

  const weekday = now.toLocaleDateString("en-CA", { weekday: "long" });
  const date = now.toLocaleDateString("de-CH", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });
  const time = now.toLocaleTimeString("de-CH", {
    hour: "2-digit",
    minute: "2-digit",
  });
}, 10000);
