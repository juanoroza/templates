function getAgencyData(status) {
  action = status;
  var agency = document.getElementById("agencyName");
  var office = document.getElementById("officeName");
  if (action) {
    agency.style.display = office.style.display = "flex";
  } else {
    agency.style.display = office.style.display = "none";
  }
}
function locationHref() {
  location.href='./login.html';
}
