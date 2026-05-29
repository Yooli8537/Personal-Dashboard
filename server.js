import express, { json } from "express";
import notesRouter from "./routes/notesRouter.js";
import fs from "fs";

const app = express();
const PORT = 8536;

if (!fs.existsSync("data/notes.json")) {
  fs.writeFileSync("data/notes.json", "[]");
}

app.use(json());
app.use(notesRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
