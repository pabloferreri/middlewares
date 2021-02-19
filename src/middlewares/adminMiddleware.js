const fs = require("fs");
const path = require('path');

const adminFilePath = path.join(__dirname, '../data/adminLog.json');
const admin = JSON.parse(fs.readFileSync(adminFilePath, 'utf-8'));

function adminMiddleware(req,res,next) {

    let adminAllow = admin.find((person) => person.name == req.body.user)
    
    adminAllow? next(): res.send("No tienes los privilegios para ingresar")
}

module.exports = adminMiddleware;