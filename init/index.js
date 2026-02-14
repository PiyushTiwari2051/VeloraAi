const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}
const User = require("../models/user.js");

const initDB = async () => {
  try {
    await Listing.deleteMany({});

    let owner = await User.findOne({ username: "admin" });
    if (!owner) {
      owner = new User({ email: "admin@wanderlust.com", username: "admin" });
      await User.register(owner, "admin123"); // Default password
      console.log("Created default admin user");
    }

    initData.data = initData.data.map((obj) => ({ ...obj, owner: owner._id }));
    await Listing.insertMany(initData.data);
    console.log("Data was initialized with owner:", owner.username);
  } catch (err) {
    console.error("Initialization Error:", err);
  }
};

initDB();
