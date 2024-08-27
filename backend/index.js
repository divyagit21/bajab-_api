const express = require("express");
const app = express();

app.use(express.json());
const cors = require('cors');
// app.use(cors());

app.use(cors({
  origin: ["https://bajab-api-b9j1.vercel.app"],
  methods: ["POST", "GET"],
  credentials: true
}));
app.use('/',(req,res)=>{
   res.send("app running on vercel")
})
// endpoint for get and post the data
app
  .route("/bfhl")
  .get((req, res) => {
    res.status(200).json({ operation_code: 1 });
  })
  .post((req, res) => {
    const data = req.body.data || [];
    const numbers = [];
    const alphabets = [];
    let highest_alphabet = "";
    
// if item is number then add to numbers array
// if item is alphabet add to alphabets array
// if item is lowercase and last occures from a-z add to highest_alphabet 

    for (const item of data) {
      if (!isNaN(item)) {
        numbers.push(item);
      } 
      else if (item.length === 1 && isNaN(item)) {
        alphabets.push(item);
        if (
          !highest_alphabet ||
          item.toUpperCase() > highest_alphabet.toUpperCase()
        ) {
          highest_alphabet = item;
        }
      }
    }

    res.json({
      is_success: true,
      user_id: "Mitta_SaiDivya_21022004",
      email: "saidivya.21bce9199@vitapstudent.ac.in",
      roll_number: "21BCE9199",
      numbers: numbers,
      alphabets: alphabets,
      highest_alphabet: highest_alphabet ? [highest_alphabet] : [],
    });
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});