var $ = require('jquery')

// var button = require('./buttons/button.js')

// $('body').append(button);

document.querySelector('.js-static-modal-toggle').addEventListener('click', function() {
    new Modal({el: document.getElementById('static-modal')}).show();
  });