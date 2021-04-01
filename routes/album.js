const express = require('express');

const albumController = require('../controllers/album');

const router = express.Router();

// GET /album/images
router.get('/images', albumController.getImages);

// POST /album/images
router.post('/images/add', albumController.addImage);


router.post('/images/update', albumController.updateImage);
//PATCH /album/images/:id
router.post('/images/:id', albumController.likeImage);

//DELETE /album/images/:id
router.delete('/images/:id', albumController.deleteImage);
module.exports = router;