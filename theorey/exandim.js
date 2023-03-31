// how to create there own module
const add = (a,b) =>{
    return a+b ;
}
const sub = (a,b) =>{
    return a-b ;
}

// module.exports  = add;//oneway
// module.exports.add = add;  this will export as aobject..
// module.exports.sub = sub;  // 

// module.export = {add,sub}; //export as obj destructuring
// const {add,sub} = require(modulename) //import in file where require name should be same;