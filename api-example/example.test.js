const axios = require('axios');
const { getUsersFromAPI } = require('./your-module'); // Replace './your-module' with the actual file path or module name

jest.mock('axios');

describe('getUsersFromAPI', () => {
  it('should return an array of users', async () => {
    const mockUsers = [
      { id: 1, name: 'User 1' },
      { id: 2, name: 'User 2' },
      { id: 3, name: 'User 3' }
    ];
    
    axios.get.mockResolvedValueOnce({ data: mockUsers });
    
    const users = await getUsersFromAPI();
    
    expect(users).toEqual(mockUsers);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith('https://api.example.com/users');
  });
  
  it('should handle API errors and return an empty array', async () => {
    const errorMessage = 'API error';
    
    axios.get.mockRejectedValueOnce(new Error(errorMessage));
    
    const users = await getUsersFromAPI();
    
    expect(users).toEqual([]);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith('https://api.example.com/users');
    expect(console.error).toHaveBeenCalledWith('Error retrieving users from API:', errorMessage);
  });
});

/*

In this example, we're using Jest's describe and it functions to define the test suite and individual test cases, respectively. 

We mock the axios module using jest.mock('axios') to prevent actual API calls during the test execution.

The first test case checks if the function successfully returns an array of users when the API call is successful.

We mock the response from the API using axios.get.mockResolvedValueOnce and provide the expected array of users.

We then call the getUsersFromAPI function and assert that it returns the expected users, that axios.get was called with the correct URL, and that it was called exactly once.

The second test case checks if the function handles API errors correctly. 

We mock a rejected API call using axios.get.mockRejectedValueOnce and provide an error message. 

We then call the getUsersFromAPI function and assert that it returns an empty array, that axios.get was called with the correct URL, and that it was called exactly once.

Additionally, we assert that the error message was logged to the console using console.error.

Make sure to replace './your-module' in the import statement with the actual file path or module name where the getUsersFromAPI function is defined.

*/