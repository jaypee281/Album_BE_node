const express = require('express');

const {getImages,addImage,updateImage,likeImage,deleteImage} = require('../controllers/album');

const router = express.Router();

// GET /album
router.get('/', getImages);

// POST /album/add
router.post('/add', addImage);

// POST /album/update
router.post('/update', updateImage);
//PATCH /album/:id
router.post('/:id', likeImage);

//DELETE /album/:id
router.delete('/:id', deleteImage);
module.exports = router;