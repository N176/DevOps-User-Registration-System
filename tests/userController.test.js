import { test } from 'node:test';
import assert from 'node:assert';
import { createUser } from '../src/controllers/userController.js';  // Path to your userController.js

test('create User should return a user object with id', (t) => {
  const req = {
    body: { name: 'John Doe', email: 'john@example.com' }  // Mock request body
  };
  const res = {
    json: (data) => {
      assert.equal(data.name, 'John Doe'); // Assert name is 'John Doe'
      assert.equal(data.email, 'john@example.com'); // Assert email is correct
      assert.ok(data.id); // Assert that an ID is returned for the user
    }
  };

  createUser(req, res); // Call the controller function
});
