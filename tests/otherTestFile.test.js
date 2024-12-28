import { test } from 'node:test';
import assert from 'node:assert';
import { someUtilityFunction } from '../src/utils/utility.js'; // Path to some utility function

test('someUtilityFunction should return correct result', (t) => {
  const result = someUtilityFunction(5, 3); // Mocked test data
  assert.equal(result, 8); // Assert the expected result (e.g., 5 + 3 = 8)
});

