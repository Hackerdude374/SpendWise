// We're starting by bringing in a tool called "mongoose" that helps us work with databases in our MERN (MongoDB, Express.js, React, Node.js) stack.

const mongoose = require("mongoose");

// Now, we're defining a blueprint for what each user in our application will look like. Think of it like a form where we jot down the details we need for each user.

const userSchema = new mongoose.Schema(
  {
    // Here, we're saying that each user should have a "username", and it should be a piece of text (a string) and it's required, meaning we can't leave it blank.
    username: {
      type: String,
      required: true,
      unique: true, // Also, each username should be unique, like a name tag at a party.
    },

    // Similarly, each user should have an "email" address. It should also be a string and required, and each email should be unique too.
    email: {
      type: String,
      required: true,
      unique: true,
    },

    // Lastly, we need a "password" for each user. Again, it's a string and required. We want to keep this secret and safe!
    password: {
      type: String,
      required: true,
    },
  },

  // Besides these details, we also want to know when each user was created and when they were last updated. This part helps us keep track of time.
  {
    timestamps: true,
  }
);

// Finally, we package up this blueprint into something we can use throughout our MERN app. It's like putting our form into a folder and labeling it "User".
module.exports = mongoose.model("User", userSchema);
