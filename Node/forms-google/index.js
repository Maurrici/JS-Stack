const {google} = require('googleapis');
const forms = google.forms({
  version: 'v1',
  auth: 'AIzaSyDa5vE-hmzZhKMoPY5z_uYnJQqas1qbQlw' // specify your API key here
});

async function main(params) {
    const res = await forms.forms.responses.list({
        formId: '1hOzjI3kLt2pT9fcguWmXr3hfiDf0fH-7coiLI1PT0g0'
    });

    res.data.responses.forEach(item => {
        Object.keys(item.answers).forEach((el) => {
            console.log(item.answers[el].textAnswers.answers);
        });
    });
};

main().catch(console.error);