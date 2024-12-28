import { test } from 'node:test';
import assert from 'node:assert';
import { getHealth } from '../src/controllers/healthController.js';  // Path to your healthController.js

test('health check returns ok status', (t) => {
  const req = {}; // Mock request object
  const res = {
    json: (data) => {
      assert.equal(data.status, 'ok'); // Assert the response status is 'ok'
      assert.ok(data.timestamp); // Ensure there's a timestamp
    }
  };
  
  getHealth(req, res); // Call the controller function
});
