import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({

  username: {
    type: String,
    required: true,
  },
  personName:{
  type: String,
  // required: true,
},
gender:{
  type: String,
  // required: true,
},
tShirtSize:{

  type: String,
  // required: true,
}, 
cseBatch:{
  type: String,
   required: true,
},
mobileNumber: {
  type: String,
  unique: true,
  // validate: {
  //   validator: (v) => /^[0-9]{10}$/.test(v),
  //   message: "Invalid mobile number format. Must be 10 digits.",
  // }

},
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  profileImage: {
    type: String,
    default: "",
  },
  chats: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Chat" }],
    default: [],
  }
});

// const User = mongoose.models.User || mongoose.model("User", UserSchema);

 const UserInfo = mongoose.models.UserInformation || mongoose.model("UserInformation", UserSchema);

export default UserInfo;
