// Quote of the Day Widget

export async function setQuote() {
  const widget = document.querySelector("#widget-quotes");

  const response = await fetch("/api/quotes");
  if (response.ok) {
    const quotes = await response.json();

    const now = new Date();
    const seed =
      now.getFullYear() * 10000 + (now.getMonth() + 1) * 100 + now.getDate();

    const i = seed % quotes.length;
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
