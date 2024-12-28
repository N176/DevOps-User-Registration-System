/* import { test } from 'node:test';
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
 */

import { test } from 'node:test';
import assert from 'node:assert';
import { getHealth } from '../src/controllers/healthController.js';

test('health check returns ok status', (t) => {
  const req = {}; // Mock request object
  const res = {
    json: (data) => {
      try {
        // Validate the response data
        assert.equal(data.status, 'ok', 'Status should be "ok"');
        assert.ok(data.timestamp, 'Timestamp should be present');
      } catch (err) {
        // Log error to help with debugging
        console.error('Test failed:', err.message);
        throw err;  // Re-throw the error to fail the test
      }
    }
  };
  
  // Call the function to check health status
  getHealth(req, res);
});
