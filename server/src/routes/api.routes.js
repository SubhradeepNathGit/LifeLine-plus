const express = require('express');
const router = express.Router();

const ProjectController = require('../controllers/home.controller');

// Define home project API routes here
router.get('/info', ProjectController.getInfo);
router.get('/ping', (req, res) => res.json({ message: 'API is working' }));

module.exports = router;
