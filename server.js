import express, { json } from "express";
import fs from "fs";

const app = express();
const PORT = 8536;

if (!fs.existsSync("data/notes.json")) {
  fs.writeFileSync("data/notes.json", "[]");
}

app.use(json());

app.get("/api/notes", async (req, res) => {
  try {
    const data = await fs.promises.readFile("data/notes.json", "utf-8");
    console.log("Notes: Successfully got save data.");
    res.json(JSON.parse(data));
  } catch (err) {
    console.error(`Notes: ${err}`);
    res.status(500).json({ error: "Notes: Failed to get save data." });
  }
});

app.post("/api/notes", async (req, res) => {
  const { saveData } = req.body;

  try {
    if (saveData) {
      await fs.promises.writeFile(
        "data/notes.json",
        JSON.stringify(saveData, null, 2),
        "utf8",
      );

      console.log("Notes: Successfully saved.");
      res.json({ success: true });
    } else {
      console.error("Notes: Couldn't find data.");
      res.status(404).json({ error: "Notes: Couldn't find data." });
    }
  } catch (err) {
    console.error(`Notes: ${err}`);
    res.status(500).json({ error: "Notes: Failed to save." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
