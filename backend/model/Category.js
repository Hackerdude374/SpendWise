// We're using "mongoose" again to work with databases.

const mongoose = require("mongoose");

// Now, we're defining another blueprint, this time for categories. Think of it like a form where we jot down details about different categories.

const categorySchema = new mongoose.Schema(
  {
    // Each category belongs to a user. This line says that the "user" field will hold the unique ID of the user who owns this category.
    user: {
      type: mongoose.Schema.Types.ObjectId, // This is like a special ID number that mongoose understands.
      ref: "User", // It refers to the "User" model we defined earlier, so we can connect categories to users.
      required: true, // We must know which user owns this category.
    },

    // Each category has a name. It's like a label for the category, such as "Food", "Rent", or "Salary".
    name: {
      type: String, // It's a piece of text.
      required: true, // We must specify a name for the category.
      default: "Uncategorized", // If we don't specify a name, it will be "Uncategorized" by default.
    },

    // We also want to know the type of category, whether it's for income or expense.
    type: {
      type: String, // It's a piece of text.
      required: true, // We must specify whether it's an income or expense category.
      enum: ["income", "expense"], // It can only be one of these two values.
    },
  },

  // Just like before, we want to keep track of when each category was created and last updated.
  {
    timestamps: true,
  }
);

// And as usual, we package up this blueprint into something we can use throughout our MERN app. This time, it's labeled "Category".
module.exports = mongoose.model("Category", categorySchema);
