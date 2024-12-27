import { Request } from "express";
import multer from "multer";
import path from "path";
import fs from "fs";

const uploadsPath = path.resolve(
  __dirname,
  process.env.UPLOADS_PATH || "../../uploads"
);

// Mengecek apakah folder 'uploads' ada, jika tidak ada, buat folder
if (!fs.existsSync(uploadsPath)) {
  fs.mkdirSync(uploadsPath, { recursive: true }); // Membuat folder secara otomatis jika belum ada
}

// Menentukan direktori tempat file gambar akan disimpan
const storage = multer.diskStorage({
  destination: function (req: Request, file, cb) {
    cb(null, path.join(__dirname, "../../uploads")); // Folder tempat gambar akan disimpan
  },
  filename: function (req: Request, file, cb) {
    const fileExtension = path.extname(file.originalname); // Menyimpan ekstensi file asli
    const filename = Date.now() + fileExtension; // Nama file berdasarkan timestamp untuk menghindari duplikat
    cb(null, filename);
  },
});

// Filter untuk hanya menerima file gambar
const fileFilter = (req: Request, file: any, cb: any) => {
  const allowedTypes = /jpeg|jpg|png|gif/;
  const isValid = allowedTypes.test(file.mimetype);
  if (isValid) {
    cb(null, true); // File valid
  } else {
    cb(new Error("Invalid file type, only images are allowed"), false); // File tidak valid
  }
};

// Membuat instance multer
const upload = multer({ storage: storage, fileFilter: fileFilter });

export default upload;
