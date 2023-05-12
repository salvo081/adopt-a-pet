const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

//importing all routes:
const petsRouter = require('./routes/pets');

//"Inhaltsverzeichnis" => wir hängen unsere Routes an den Initial-Endpunkt an
app.use('/', petsRouter);

app.get('/', (req, res) =>
  res.send(`
    <h1>Adopt a Pet!</h1>
    <p>Browse through the links below to find your new furry friend:</p>
    <ul>
      <li><a href="animals/dogs">Dogs</a></li>
      <li><a href="animals/cats">Cats</a></li>
      <li><a href="animals/rabbits">Rabbits</a></li>
    </ul>
  `)
);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
