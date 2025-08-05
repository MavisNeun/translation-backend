// https://github.com/felipe-augusto/linguee
// npm install linguee
// var linguee = require('linguee');

var linguee = require('linguee');

// translate money from english to german
/* 
linguee
  .translate('money', { from: 'eng', to: 'ger' })
  .then(response => {
    console.log('Translation:', response.words[0].translations);
  })
  .catch(error => {
    console.error('Translation error:', error);
  }); 
  
  */

  linguee
  .translate('branch', { from: 'eng', to: 'ger' })
  .then(function(response) {
    // Print just the translations array
    console.log(JSON.stringify(result, null, 2));
  })
  .catch(error => {
    console.error('Translation error:', error);
  });