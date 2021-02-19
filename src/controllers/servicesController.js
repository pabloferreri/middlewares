const controller = {
    show: (req,res)=>{
        res.send("services");
    },
    design: (req,res)=>{
        res.send("design")
    }
} 

module.exports = controller;