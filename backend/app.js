const express = require("express");
const app = express();

//!Start server
const PORT = process.env.PORT || 8000;
app.listen(()=> console.log(`Server is running on this port ${PORT} `));
