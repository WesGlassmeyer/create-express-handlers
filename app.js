const express = require("express");
const morgan = require("morgan");

const app = express();
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("change the code!");
});

app.listen(8000, () => {
  console.log("Express server is listening on port 8000!");
});

app.get("/burgers", (req, res) => {
  res.send("We have juicy cheese burgers!");
});

app.get("/pizza/pepperoni", (req, res) => {
  res.send("Your oder is being delivered!");
});

app.get("/pizza/pineapple", (req, res) => {
  res.send("We don't serve that here!");
});

app.get("/echo", (req, res) => {
  const responseText = `Here are some details of your request:
      Base URL: ${req.baseUrl}
      Host: ${req.hostname}
      Path: ${req.path}
      App: ${req.app}
      Body: ${req.body}
      Cookies: ${req.cookies}
      IP: ${req.ip}

    `;
  res.send(responseText);
});

app.get("/queryViewer", (req, res) => {
  console.log(req.query);
  res.end(); //do not send any data back to the client
});

app.get("/sum", (req, res) => {
  const { a, b } = req.query;
  if (!a) return res.status(400).send(`a is required`);
  if (!b) return res.status(400).send(`b is required`);

  const numA = parseFloat(a);
  const numB = parseFloat(b);

  if (Number.isNaN(numA)) return res.status(400).send(`a must be a number`);
  if (Number.isNaN(numB)) return res.status(400).send(`b must be a number`);

  const c = numA + numB;

  /*const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  const c = a + b; */
  const sumResponse = `The sum of ${numA} and ${numB} is ${c}`;
  //res.send(sumResponse);

  res.status(200).send(sumResponse);
});

app.get("/cipher", (req, res) => {
    const {text, shift} = req.query
    if (!text) return res.status(400).send(`text is required`);
    if (!shift) return res.status(400).send(`shift is required`);
    const numShift = parseFloat(shift)
    if (Number.isNaN(numShift)) return res.status(400).send(`Shift must be a number`);
    const shiftedText = 
    console.log(req.query);
    res.end(); //do not send any data back to the client
  });
