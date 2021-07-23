const router = require("express").Router();
const numbers = require("../model/number");

router.post("/add", async (req, res)=>{
    try{
        const number = new numbers({
            number1: req.body.number1,
            number2: req.body.number2
        })
        const sum = number.number1 + number.number2;
        res.status(200).json({"sum": sum});
        console.log(sum)
    }
    catch(err){
        console.log(err)
        res.status(500).json(err);
    }
})

module.exports = router;