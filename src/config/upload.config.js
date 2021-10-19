const multer = require("multer");

const fileFilter = (req, file, cb) => {
  const fileTypes = /jpeg|jpg|png|gif/;
  const mimetype = fileTypes.test(file.mimetype);

  if (mimetype) {
    return cb(null, true);
  }
  cb("File type not accepted.", false);
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
});

module.exports = upload;
