function modal1(){
  // Get the modal
  var modal = document.getElementById("momodal");

  // Get the button that opens the modal
  var btn = document.getElementById("imgbtn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  var link = document.getElementById("link3");

  // When the user clicks on the button, open the modal
  btn.onclick = function() {
      modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
      modal.style.display = "none";
  }

  link.onclick = function() {
      modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
};

function modal3(){
  // Get the modal
  var modal = document.getElementById("promodal");

  // Get the button that opens the modal
  var btn = document.getElementById("promodalbtn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  var link = document.getElementById("promodal5");

  // When the user clicks on the button, open the modal
  btn.onclick = function() {
      modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
      modal.style.display = "none";
  }

  link.onclick = function() {
      modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
};
