'use strict';

const path = require('path');
const google = require('@googleapis/forms');
const {
  authenticate,
} = require('@google-cloud/local-auth');

const formID = '1hOzjI3kLt2pT9fcguWmXr3hfiDf0fH-7coiLI1PT0g0';

async function runSample(query) {
  const auth = await authenticate({
    keyfilePath: path.join(__dirname, 'credentials.json'),
    scopes: 'https://www.googleapis.com/auth/forms.responses.readonly',
  });
  const forms = google.forms({
    version: 'v1',
    auth: auth,
  });
  const res = await forms.forms.responses.list({
    formId: formID,
  });

  res.data.responses.forEach(item => {
    Object.keys(item.answers).forEach((el) => {
        console.log(item.answers[el].textAnswers.answers);
    });
  });
  return res.data;
}

if (module === require.main) {
  runSample().catch(console.error);
}
module.exports = runSample;