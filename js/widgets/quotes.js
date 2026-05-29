// Quote of the Day Widget

export async function setQuote() {
  const widget = document.querySelector("#widget-quotes");

  const response = await fetch("/api/quotes");
  if (response.ok) {
    const quotes = await response.json();
    const i = Math.floor(Math.random() * quotes.length);
    console.log(quotes[i]);
  }
}
