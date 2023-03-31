const mongoose = require("mongoose");
const validator = require("validator");
//connection creation with database ..... very important 

mongoose.connect("mongodb://localhost:27017/channel1")
.then(()=>console.log("connection successfully"))
.catch((err) => console.log(err));


// scheama just define the structure of database.....


const channelSchema =  new mongoose.Schema({
    name:{
        type:String,
        lowercase:true ,         // this validator ,use validator acc to use
        minlength : [2,"err"],     
    },
    age : {
        type:Number,
        // validate(val){        // custom validator
        //     if(val<=0){
        //         throw new Error("agr not negative")
        //     }
        // }
    },
    active: Boolean,
    date:{
        type:Date,
        default :Date.now
    },
    email : {
        type : String,
        unique : true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("email is invalid")
            }
        }
    }
})
// create new collection
const Playlist = new mongoose.model("Playlist" ,channelSchema);  


//create document or insert

// const  one = new Playlist({
//     name : "aadarsh",
//     active:true,                        //    as this return promise 
// })

// one.save(); // so this function take some time that why we use new way.. async and await


// const adddocument = async()=>{
//     try
//    { const  one = new Playlist({
//         name : "aadarsh",
 
//         active:true,                        //    whwnever we async await we must use try and catch..
//     })

//     const  two = new Playlist({
//         name : "aadarsh",
//         active:true,                        //    whwnever we async await we must use try and catch..
//     })

//     const  three = new Playlist({
//         name : "harsh",
//         active:true,                        //    whwnever we async await we must use try and catch..
//     })
    
//         // const data = await one.save();   // this is for one document ..

//         // if i wan tto insert many document we insert then use insert many 
//         const data = await Playlist.insertMany([one,two,three]);
//         console.log(data);
//    } 
//    catch(err){
//     console.log(err);
//    }
// }
// adddocument();



// how to read document  this very important  ......../
// const getDocument  = async()=>{ 
//     const result = await Playlist
//     .find({name:"harsh"})    // find the data where  the name is harsh4
//     .find({name:{$gt:50}})    // if i want to add logical operator  // gt ,gte,lt,lte 
//     .select({name:1})   // this show which branch you want  to access
//     .limit(1);    // this show no of data you want to access 
//     console.log(result);
// }
// getDocument();

// const deleteDocument = async(x)=>{
//     try{
//         const result = await Playlist.deleteOne({_id : x})
           //const result = await Playlist.findByIdAndDelete({_id : x}) // it also give which id is deleted
//         console.log(result);
//     }
//     catch(err){
//         console.log(err);
//     }
// }
//  deleteDocument("634d55f37fc2034d0018e7f6");