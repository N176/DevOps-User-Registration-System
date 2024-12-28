import { test } from 'node:test';
import assert from 'node:assert';
import { getHealth } from '../src/controllers/healthController.js';

test('health check returns ok status', (t) => {
  const req = {};
  const res = {
    json: (data) => {
      assert.equal(data.status, 'ok');
      assert.ok(data.timestamp);
    }
  };
  
  getHealth(req, res);
});