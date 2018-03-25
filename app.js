const express = require('express');
const blinkt = require('blinkt');
let app = express();

app.get("/on", (req, res) =>
{
  blinkt.clear();
  blinkt.setAll(150, 0 ,0, 0.2);
  blinkt.show();
  setTimeout(() => {
    blinkt.clear();
  }, 1000);

  res.status(200).send();
});

app.get("/off", (req, res) =>
{
  blinkt.clear();
  res.status(200).send();
});

app.listen(3200, () => {
  console.log("I'm waiting for blink command.")
});

process.on('SIGINT', () => {
  process.exit();
});

