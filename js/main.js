import { Editor } from "@tiptap/core";
import { ListKit } from "@tiptap/extension-list";
import { default as StarterKit } from "@tiptap/starter-kit";

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

// Notes Widget
// Autosave Variable
let notesSaved = true;

async function createEditor() {
  const notesWidget = document.querySelector("#widget-notes");
  const editorField = document.createElement("div");
  editorField.style.height = "100%";
  editorField.style.overflow = "hidden";
  editorField.style.flexDirection = "column";

  // Creating new TipTap Editor
  const editor = new Editor({
    element: editorField,
    extensions: [StarterKit, ListKit],
    content: "<p></p>",
    autofocus: true,
    injectCSS: true,
    onUpdate: () => {
      notesSaved = false;
    },
  });

  notesWidget.appendChild(editorField);

  // Autosaving
  setInterval(async () => {
    if (!notesSaved) {
      const saveData = editor.getJSON();

      const save = await fetch("/api/notes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ saveData }),
      });

      if (save.ok) {
        console.log("Notes Autosave Successful");
        notesSaved = true;
      }
    }
  }, 5000);
}

createEditor();
