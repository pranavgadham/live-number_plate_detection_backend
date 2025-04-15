import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/numberplate');
    },
    filename: function (req, file, cb) {
        const ext = path.extname(file.originalname);
        const filename = req.body.regNumber + '-' + Date.now() + ext;
        cb(null, filename);
    }
});

const upload = multer({ storage: storage, limits: { fileSize: 200 * 1024 * 1024 }, });

export default upload;

