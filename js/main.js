// Selecting Widgets
const title = document.querySelector("#widget-title");

function applyTitleTime() {
  const dateView = document.querySelector("#dateView");
  const timeView = document.querySelector("#timeView");

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

  // Applying Values
  dateView.textContent = `${weekday}, ${date}`;
  timeView.textContent = time;

  console.log("Updated Time");
}

// Title
applyTitleTime();
setInterval(applyTitleTime, 1000);
