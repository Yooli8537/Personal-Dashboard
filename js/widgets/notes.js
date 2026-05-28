// Notes Widget
import { Editor } from "@tiptap/core";
import { ListKit } from "@tiptap/extension-list";
import { default as StarterKit } from "@tiptap/starter-kit";

// Autosave Variable
let notesSaved = true;

export async function createEditor() {
  const notesWidget = document.querySelector("#widget-notes");
  const editorField = document.createElement("div");
  editorField.style.height = "100%";
  editorField.style.overflow = "hidden";
  editorField.style.flexDirection = "column";

  // Getting save data
  let saveData;

  const getSaveData = await fetch("/api/notes", {
    method: "GET",
  });

  if (getSaveData.ok) {
    saveData = await getSaveData.json();
    console.log("Notes: Got Data successfully.");
  } else {
    console.error("Notes: Failed to get Data.");
  }

  // Creating new TipTap Editor
  const editor = new Editor({
    element: editorField,
    extensions: [StarterKit, ListKit],
    content: saveData ?? "<p></p>",
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
        console.log("Notes: Autosave Successful");
        notesSaved = true;
      }
    }
  }, 5000);
}