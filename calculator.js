const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/", function (req, res) {
//     res.send("Hello World!");
// });

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
    // console.log(req.body);
    const num1 = parseFloat(req.body.num1);
    const num2 = parseFloat(req.body.num2);
    const result = num1 + num2;

    res.send(`The result of the calculation is: ${result}`);
});


app.get("/bmicalculator", function (req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function (req, res) {
    const weight = parseFloat(req.body.weight);
    const height = parseFloat(req.body.height);
    const bmi = weight / (height * height);

    res.send(`Your BMI (rounded to the nearest whole number) is: ${Math.round(bmi)}`);
});

app.listen(3000, function () {
    console.log("Server started on port 3000 (localhost:3000)");
});
