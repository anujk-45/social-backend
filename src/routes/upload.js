const upload = require('../middleware/upload');
const express = require('express');
const router = express.Router();

const API = process.env.API;

router.post('/upload', upload.single('file'), async (req, res) => {
  if (req.file === undefined) return res.send('you must select a file.');
  const imgUrl = `${API}file/${req.file.filename}`;
  return res.send(imgUrl);
});

module.exports = router;
