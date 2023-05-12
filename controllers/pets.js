const { getAllPets, getOnePet } = require('../model/pets');

const getPets = (req, res) => {
  const { pet_type } = req.params;
  const pets = getAllPets(pet_type);

  res.send(`
    <h1>List of ${pet_type}</h1>
    <ul>
      ${
        pets.length > 0
          ? pets
              .map(
                (pet, index) =>
                  `<li><a href="/animals/${pet_type}/${index}">${pet.name}</a></li>`
              )
              .join('')
          : '<li>NO PETS AVAILABLE</li>'
      }
    </ul>
  `);
};

const findPet = (req, res) => {
  const { pet_type, pet_id } = req.params;
  const pet = getOnePet(pet_type, pet_id);
  res.send(`
    <h1>${pet.name}</h1>
    <img src="${pet.url}" alt="${pet.name}" />
    <p>${pet.description}</p>
    <ul>
      <li>Breed: ${pet.breed}</li>
      <li>Age: ${pet.age}</li>
    </ul>
  `);
};

module.exports = { getPets, findPet };
