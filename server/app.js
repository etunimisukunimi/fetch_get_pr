const express = require("express");
const app = express();
const port = 8080;


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/data", (req, res) => {
  res.set('Access-Control-Allow-Origin', '*')
  res.json({
        "datastring": "Эта строка приходит с localhost:8080/data по get-запросу."
  });
});
