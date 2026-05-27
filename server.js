import express, { json } from "express";
import fs from "fs";

const app = express();
const PORT = 8536;

if (!fs.existsSync("data/notes.json")) {
  fs.writeFileSync("data/notes.json", "[]");
}

app.use(json());

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
