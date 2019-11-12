const GoogleSpreadsheet = require('google-spreadsheet');
const credentials = require('./bugtracker.json');

const doc = new GoogleSpreadsheet(
  '17TRhwfD_qPRDr1R-El7nKVifoJcWJ_LeYtykZxNF6Uk'
);

doc.useServiceAccountAuth(credentials, err => {
  if (err) {
    console.log('Não foi possível abrir a planilha!');
  } else {
    console.log('Planilha aberta!');
  }
});
