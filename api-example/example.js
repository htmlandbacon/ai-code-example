const axios = require('axios');

async function getUsersFromAPI() {
  try {
    const response = await axios.get('https://api.example.com/users');
    return response.data; // Assuming the API response contains an array of users
  } catch (error) {
    console.error('Error retrieving users from API:', error.message);
    return []; // Return an empty array if there's an error
  }
}

/* Usage example
getUsersFromAPI()
  .then(users => {
    console.log('Users:', users);
    // Do something with the users here
  })
  .catch(error => {
    console.error('Error:', error);
  });
*/

/*

In this example, we're using the Axios library to make an HTTP GET request to the API endpoint (https://api.example.com/users). 

The getUsersFromAPI function is defined as an async function, allowing us to use await to wait for the response from the API. 

If the request is successful, the function returns the array of users obtained from the API. Otherwise, it logs an error message and returns an empty array.

You can replace the API URL (https://api.example.com/users) with the actual endpoint you want to fetch user data from. 

Make sure to install Axios by running npm install axios in your Node.js project before using this code.

*/
