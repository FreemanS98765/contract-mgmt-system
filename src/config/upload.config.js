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
    cb(null, "../../uploads/");
  },
  filename: (req, file, cb) => {
    let extArray = file.mimetype.split("/");
    let ext = extArray[extArray.length - 1];
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, `${file.fieldname}-${uniqueSuffix}.${ext}`);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

module.exports = upload;
