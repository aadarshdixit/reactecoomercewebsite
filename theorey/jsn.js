const biodata  = {
    name : "aadarsh",     // object 
    age:18,
};

const jsondata = JSON.stringify(biodata);   //obj to json
console.log(jsondata);


const objdata = JSON.parse(jsondata);   //json to obj
//for using api in nodejs we just to use the just use fs module............
