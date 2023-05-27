const express = require('express');
const yogaController = require('../controllers/yoga_controller');
const router = express.Router();


router.get("/all-yoga-pose", yogaController.getAllYogaPoses);
router.get('/specific-yoga-pose/:id', yogaController.getSpecificYogaPoses);
router.get('/yoga-category/:category', yogaController.getSpecificYogaPoseOnCategory);
router.post('/add-new-yoga-pose', yogaController.addNewYogaPose);
router.put('/update-yoga-pose/:id', yogaController.updateYogaPose);
router.delete('/delete-yoga-pose/:id', yogaController.deleteYogaPose);

module.exports = router;