import { Router } from "express";
import fs from "fs";

const router = Router();

router.get("/api/quotes", async (req, res) => {
  try {
    const data = await fs.promises.readFile("./server-data/quotes.json", "utf-8");
    console.log("Quotes: Successfully fetched Data.");
    res.send(data);
  } catch (err) {
    console.error(`Error: ${err}`);
    res.status(500).json({ error: "Quotes: Failed to get Data." });
  }
});

export default router;
