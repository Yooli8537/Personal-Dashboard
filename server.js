import express, { json } from "express";
import fs from "fs";

const app = express();
const PORT = 8536;

if (!fs.existsSync("data/notes.json")) {
  fs.writeFileSync("data/notes.json", "[]");
}

app.use(json());

app.post("/api/notes", async (req, res) => {
  const { saveData } = req.body;

  try {
    if (saveData) {
      await fs.promises.writeFile(
        "data/notes.json",
        JSON.stringify(saveData, null, 2),
        "utf8",
      );

      console.log("Successfully saved Notes.");
      res.json({ success: true });
    } else {
      console.error("Couldn't find Notes data.");
      res.status(404).json({ error: "Couldn't find Notes data." });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to save Notes." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
