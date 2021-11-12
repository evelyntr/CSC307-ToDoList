/* schema for each user */

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    /* enter password here later? */
  },
  { collection: "users_list" }
);

const User = mongoose.model("User", UserSchema);
module.exports = User;
