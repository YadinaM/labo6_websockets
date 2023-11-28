module.exports.go = (server) => {
    const Primus = require('primus');
    const primus = new Primus(server, {/* options */});

    //check if connection
    primus.on("connection", (spark) => {
        console.log("connection ⭐");
        
        //check if data then console log
        spark.on("data", (data) => { //spark is een individu sturen met primus is naar iedereen
            console.log("data 🔥", data);

            //send data back to all clients
            primus.write(data); //all
            //spark.write(data); // 1
        })
    })
}