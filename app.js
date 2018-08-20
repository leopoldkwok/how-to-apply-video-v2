var $ = require('jquery')

/* Get iframe src attribute value i.e. YouTube video url
and store it in a variable */
let url = $("#maxfactorVideo").attr('src');
console.log('url: ', url);

/* Remove iframe src attribute on page load to
prevent autoplay in background */
$("#maxfactorVideo").attr('src', '');

document.querySelector('.js-static-modal-toggle').addEventListener('click', function() {
    new Modal({el: document.getElementById('static-modal')}).show();
      /* Assign the initially stored url back to the iframe src
      attribute when modal is displayed */
      $("#maxfactorVideo").attr('src', url);
      console.log('url again:', url);
  });

  /* Assign empty url value to the iframe src attribute when
  modal hide, which stop the video playing */
  $("#static-modal").on('hide.bs.modal', function(){
    $("#maxfactorVideo").attr('src', '');
  });

// Get modal element
let modal = document.getElementById('static-modal');

// Get close button
let closeBtn = document.getElementsByClassName('close')[0];

// Listen for close click
closeBtn.addEventListener('click', closeModal);

// Listen for outside click
window.addEventListener('click', outsideClick);

// Function to close modal
function closeModal() {
    modal.style.display = 'none';
    $("#maxfactorVideo").attr('src', '');
    console.log("x clicked on to close");
}

// Function to close modal if outside click
function outsideClick(e) {
    if(e.target == modal) {
        $("#maxfactorVideo").attr('src', '');
        console.log('it worked');
    }
}
