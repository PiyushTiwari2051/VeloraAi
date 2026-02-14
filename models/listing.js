const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const Review=require("./review.js");
const listingSchema=new Schema({
    title:{
        type:String,
        required:true,
    },
    description:String,
    // image:{
    //     type:String, // Stores only your image link from data.js  
    //     required: true, // Makes sure image is mandatory
    // },
     image: {
        url:String,
        filename:String,         
       },
    price:Number,
    location:String,
    country:String,
    reviews:[
        {
            type:Schema.Types.ObjectId,
            ref:"Review",
        }
    ],
    owner:{
        type:Schema.Types.ObjectId,
         ref:"User",
    },
    category:{
        type:String,
        enum:["mountains","actic","rooms","Tranding","farms"],
    }
});
listingSchema.post("findOneAndDelete",async (listing)=>{
    if(listing){
         await Review.deleteMany({_id:{$in:listing.reviews}});
}
});
const Listing=mongoose.model("Listing",listingSchema);
module.exports=Listing;
// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const listingSchema = new Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   description: String,
//   image: {
//     type: String,
//     default: "https://unsplash.com/photos/woman-reads-a-book-surrounded-by-bookshelves-vOLSzESOvbQ",
//     set: function(v) {
//       if (!v || typeof v !== "string" || v.trim() === "") {
//         return "https://unsplash.com/photos/woman-reads-a-book-surrounded-by-bookshelves-vOLSzESOvbQ";
//       }
//       return v;
//     }
//   },
//   price:Number,
//   location: String,
//   country: String,
// });

// const Listing = mongoose.model("Listing", listingSchema);
// module.exports = Listing;
// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const listingSchema = new Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   description: String,
//   image: {
//     type: String,
//     default: "https://images.unsplash.com/photo-1535905557558-afc4877a26fc",

//     set: function (v) {
//       if (!v || typeof v !== "string" || v.trim() === "") {
//         return "https://images.unsplash.com/photo-1535905557558-afc4877a26fc"
// ;
//       }
//       return v;
//     },
//   },
//   price: Number,
//   location: String,
//   country: String,
// });

// const Listing = mongoose.model("Listing", listingSchema);
// module.exports = Listing;
