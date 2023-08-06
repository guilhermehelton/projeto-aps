import mongoose from "mongoose";

const User = mongoose.model("User", {
  name: String,
  email: String,
  accountId: String,
});

export default User;
