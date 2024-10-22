// configaration for arm based architechure
const multer = require("multer");
const fs = require("fs");
const path = require("path");


/// Ensure 'uploads/' folder exists
const uploadDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Ensure uploads directory exists
const uploadsDir = path.join(__dirname, "..", "uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Set storage engine
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadsDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

// Check file type
function checkFileType(file, cb) {
  const filetypes = /jpeg|jpg|png|gif/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb("Error: Images Only!");
  }
}

// Initialize upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB file size limit
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});

const uploadSingle = upload.single("image");

const uploadMultiple = upload.array("images", 5);

const cleanUpFiles = (files) => {
  files.forEach((file) => {
    fs.unlink(file.path, (err) => {
      if (err) console.error(`Failed to delete file: ${file.path}`);
    });
  });
};

module.exports = { cleanUpFiles, uploadSingle, uploadMultiple };