function initMap() {
    // The location of Uluru
    var beetroot = {lat: 48.9176274, lng: 24.7013752};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 16, center: beetroot});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: beetroot, map: map, title: "Beetroot Academy"});
  };


function validate(form_id,email) {
   var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
   var address = document.forms[form_id].elements[email].value;
   if(reg.test(address) == false) {
      document.getElementById('error').innerHTML = "PLEASE ENTER CORRECT E-MAIL";
      document.getElementById('email').style.borderColor = "red";
      return false;
   }
}
//# sourceMappingURL=../sourcemaps/main.js.map

//# sourceMappingURL=../sourcemaps/main.js.map
