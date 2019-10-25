const crypto = require('crypto');

function getFileCoverageDataByName(name, coverageVariable = __coverage__) {
  for(const filename in coverageVariable) {
    const hash = crypto.createHash('sha1');
    hash.update(filename);
    const coverageIdentifier = 'cov_' + parseInt(hash.digest('hex').substr(0, 12), 16).toString(36);
    if (coverageIdentifier === ast.object.object.name) {
      return coverageVariable[coverageIdentifier];
    }
  }
  return null;
}
        
module.exports = {
  getFileCoverageDataByName
};
