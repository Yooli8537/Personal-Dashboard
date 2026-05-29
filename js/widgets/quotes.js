// Quote of the Day Widget

export async function setQuote() {
  const widget = document.querySelector("#widget-quotes");

  const response = await fetch("/api/quotes");
  if (response.ok) {
    const quotes = await response.json();
    const i = Math.floor(Math.random() * quotes.length);
    const quoteOfTheDay = quotes[i];

    const textField = document.createElement("h2");
    textField.classList.add("quote");
    textField.textContent = `"${quoteOfTheDay.text}"`;

    const authorField = document.createElement("h3");
    authorField.classList.add("quote");
    authorField.textContent = `~ ${quoteOfTheDay.author}`;

    widget.appendChild(textField);
    widget.appendChild(authorField);
  }
}
