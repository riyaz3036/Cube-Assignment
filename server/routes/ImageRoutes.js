const express = require('express');
const multer = require('multer');
const Image = require('../models/Image');
const path = require('path');
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); 
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: function (req, file, cb) {
    const filetypes = /jpeg|jpg|png/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb('Error: Images Only!');
    }
  },
});

// To Upload an image
router.post('/upload', upload.single('image'), async (req, res) => {
  try {
    const imageUrl = `/uploads/${req.file.filename}`;
    const image = new Image({
      url: imageUrl,
    });
    await image.save();
    res.status(201).json({ message: 'Image uploaded successfully', image });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Get 9 random images
router.get('/images/random', async (req, res) => {
    try {
      const randomImages = await Image.aggregate([{ $sample: { size: 9 } }]); 
      res.status(200).json(randomImages);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
});

  

module.exports = router;
