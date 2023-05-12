const pets = require('../data/petList');

const getAllPets = (pet_type) => pets[pet_type];

const getOnePet = (pet_type, pet_id) => pets[pet_type][pet_id];

module.exports = { getAllPets, getOnePet };
