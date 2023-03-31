// using this module we can create our own event , listen the event aand fire the event

const { eventNames } = require("process");


// this is important 

const EventEmitter = require("events") // here we pass class that why we write the variable name in capital..
const event  = new EventEmitter();

event.on("say your name", ()=>{    //  heere i declare my event
    console.log("aadarsh");
})

event.emit("say your name")    // i am firing my own created event 

// how to pass parameter

event.on("say your name", (sc,msg)=>{    //here source and msg are parametren b            
    console.log("aadarsh");
})

event.emit("say your name",200,'ok');   //here 200 and ok are argument
