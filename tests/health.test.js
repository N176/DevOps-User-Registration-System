import { test } from 'node:test';
import assert from 'node:assert';
import { getHealth } from '../src/controllers/healthController.js';

test('health check returns ok status', (t) => {
  const req = {}; // Mock request, can be empty for this test
  const res = {
    json: (data) => {
      assert.equal(data.status, 'ok'); // Check the status field
      assert.ok(data.timestamp); // Check if timestamp is present
    }
  };
  
  getHealth(req, res); // Call the health check function
});
