const controller = {
    show: (req,res)=>{
        res.render("admin");
    },
    welcome: (req,res)=>{
        res.send("Bienvenido " + req.body.user );
    }
} 

module.exports = controller;