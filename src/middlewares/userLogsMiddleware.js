 const fs = require('fs');
 
 function userLogMiddleware(req,res,next) {
     console.log(req.ulr)
     fs.appendFileSync('userLog.txt', 'Se ingreso a la pagina ' + req.url + "\n");
     next();
 }

 module.exports = userLogMiddleware;