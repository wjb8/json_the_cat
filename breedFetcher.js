const breed = process.argv[2];
const request = require('request');

const handleData = (data) => {
  if (data.length === 0) {
    throw new Error('Breed not found');
  } else {
    console.log(data[0].description);
  }
};

const fetchBreed = (dataHandler) => {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed.substr(0, 3)}`, (error, response, body) => {
    if (error) {
      throw new Error('Request failed');
    }
  
    const data = JSON.parse(body);
    dataHandler(data);
  });

};

fetchBreed(handleData);