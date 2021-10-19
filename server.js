const express = require("express");
const multer = require("multer");
const app = express();

const cors = require("cors");

const db = require("./src/config/db.config.js");

//const PORT = process.env.PORT || 3306;

var corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
  credentials: true,
};
app.use(cors(corsOptions));
//app.use(express.static("./public"));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// force: true will drop the table if it already exists
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and Resync with { force: true }");
});

// const fileFilter = (req, file, cb) => {
//   const fileTypes = /jpeg|jpg|png|gif/;
//   const mimetype = fileTypes.test(file.mimetype);

//   if (mimetype) {
//     return cb(null, true);
//   }
//   cb("File type not accepted.", false);
// };

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "./uploads/");
//   },
//   filename: (req, file, cb) => {
//     let extArray = file.mimetype.split("/");
//     let ext = extArray[extArray.length - 1];
//     const uniqueSuffix = "-" + Math.round(Math.random() * 1e2);
//     cb(null, `${file.originalname}`);
//   },
// });

// const upload = multer({
//   storage: storage,
//   fileFilter: fileFilter,
// });

// app.post("/api/uploads/add", upload.single("files"), (req, res) => {
//   console.log("Req is: ", req.file);

//   res.send();
// });

require("./src/routes/contract.routes.js")(app);
require("./src/routes/event.routes.js")(app);
require("./src/routes/notification.routes.js")(app);
require("./src/routes/upload.routes.js")(app);

var server = app.listen(3306, function (err) {
  var host = server.address().address;
  var port = server.address().port;

  if (err) console.log("Error in server setup");

  console.log("App listening at http://%s:%s", host, port);
});
