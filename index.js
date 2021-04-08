const breedName = process.argv[2];
const { fetchBreedDescription } = require('./breedFetcher');

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    throw new Error('fetch details: ', error);
  } else {
    console.log(desc[0].description);
  }
});