// We're using "mongoose" again to help us work with databases.

const mongoose = require("mongoose");

// Now, we're defining another blueprint, but this time it's for transactions. Think of it like a form where we jot down the details of each transaction.

const transactionSchema = new mongoose.Schema(
  {
    // Each transaction is linked to a user. This line says that the "user" field will hold the unique ID of the user who made this transaction.
    user: {
      type: mongoose.Schema.Types.ObjectId, // This is like a special ID number that mongoose understands.
      ref: "User", // It refers to the "User" model we defined earlier, so we can connect transactions to users.
      required: true, // We must know which user made this transaction.
    },

    // Every transaction has a "type", which can be either "income" or "expense". It's like tagging the transaction to tell if it's money coming in or going out.
    type: {
      type: String, // It's a piece of text.
      required: true, // We must specify if it's income or expense.
      enum: ["income", "expense"], // It can only be one of these two values.
    },

    // We also want to categorize each transaction. This is like putting it into a group, like "food", "rent", or "salary".
    category: {
      type: String, // Another piece of text.
      required: true, // We need to know which category this transaction belongs to.
      default: "Uncategorized", // If we don't specify a category, it will be "Uncategorized" by default.
    },

    // Of course, every transaction involves an amount of money.
    amount: {
      type: Number, // This time, it's a number.
      required: true, // We definitely need to know how much money is involved.
    },

    // We also want to know when each transaction happened.
    date: {
      type: Date, // This field holds dates.
      default: Date.now, // If we don't say when it happened, it will assume it's now.
    },

    // Lastly, we might want to add a description to a transaction to explain what it's for.
    description: {
      type: String, // Another piece of text, but this one is optional.
      required: false, // We can leave it blank if we want.
    },
  },

  // Just like with the user schema, we want to keep track of when each transaction was created and last updated.
  {
    timestamps: true,
  }
);

// And like before, we package up this blueprint into something we can use throughout our MERN app. This time, it's labeled "Transaction".
module.exports = mongoose.model("Transaction", transactionSchema);
