const assert = require('assert');
const crypto = require('crypto');
const istanbulSpy = require('./index');

function createHashedName(name) {
  const hash = crypto.createHash('sha1');
  hash.update(name);
  return 'cov_' + parseInt(hash.digest('hex').substr(0, 12), 16).toString(36);
}

const hashedName = createHashedName('test');
const mockObject = {};

global.__coverage__ = {
  'test': mockObject
};

try {
  assert.equal(istanbulSpy.getFileCoverageDataByName(hashedName), mockObject);
} finally {
  delete global.__coverage__;
  console.log('')
}
