const fs = require('fs');

const TimeLogger = (req,res,next)=>{

    const date =  Date().toString();

    fs.appendFileSync('logs.txt',`URL: ${req.url}, Method: ${req.method}, Timestamp: ${date}\n`)

    next()

}

module.exports = TimeLogger;