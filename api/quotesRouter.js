import { Router } from "express";
import fs from "fs";

const router = Router();

router.get("/api/quotes", async (req, res) => {
  const data = await fs.promises.readFile("./data/quotes.json", "utf-8");
  console.log("Quotes: Successfully fetched Data.");
  res.send(data);
});

export default router;
