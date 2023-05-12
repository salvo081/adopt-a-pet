const express = require('express');
const router = express.Router();

const { getPets, findPet } = require('../controllers/pets');

router.route('/animals/:pet_type').get(getPets);

router.route('/animals/:pet_type/:pet_id').get(findPet);

module.exports = router;
