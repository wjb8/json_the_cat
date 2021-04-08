
const request = require('request');

// const handleData = (failure, success) => {
//   if (failure) {
//     throw new Error('Breed not found');
//   } else {
//     console.log(success[0].description);
//   }
// };

const fetchBreedDescription = (breedName, callback) => {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName.substr(0, 3)}`, (error, response, body) => {
    if (error) {
      throw new Error("Request failed");
    }
  
    const data = JSON.parse(body);
    
    if (data.length === 0) {
      callback(data, null);
    } else {
      callback(null, data);
    }
  });

};

module.exports = { fetchBreedDescription };