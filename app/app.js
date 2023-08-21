import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
app.get("/config", (req, res) => {
  res.send({ myName: "Cain" });
});
app.use(express.static("dist"));
app.listen(8080, () => console.log("Listening on port 8080!"));
