const express = require("express");
const app = express();
const userRouter = require("./routes/userRouter");

//!ROutes
app.use('/', userRouter);

//!Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
